/* eslint-disable @typescript-eslint/no-require-imports -- Node's CommonJS test harness loads TS without adding a test dependency. */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

// Lightweight component/effect harness using the project's existing TS compiler.
// These tests exercise state and event contracts; they do not replace browser QA.
function harness(overrides = {}, globals = {}) {
  let state;
  const effects = [];
  const cache = new Map();
  const hooks = {
    useState(initial) { if (state === undefined) state = initial; return [state, value => { state = value; }]; },
    useEffect(effect) { effects.push(effect); },
  };
  function load(file) {
    file = path.resolve(file);
    if (cache.has(file)) return cache.get(file);
    const compiledModule = { exports: {} };
    cache.set(file, compiledModule.exports);
    const compiled = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 },
    }).outputText;
    const customRequire = name => {
      if (name in overrides) return overrides[name];
      if (name === 'react') return hooks;
      if (name.startsWith('.')) {
        const base = path.resolve(path.dirname(file), name);
        const target = [base, base + '.ts', base + '.tsx', base + '.jsx'].find(candidate => fs.existsSync(candidate));
        return load(target);
      }
      return require(name);
    };
    vm.runInNewContext(compiled, { exports: compiledModule.exports, require: customRequire, ...globals }, { filename: file });
    return compiledModule.exports;
  }
  return { load, effects };
}
function nodes(tree, predicate) {
  if (!tree || typeof tree !== 'object') return [];
  if (Array.isArray(tree)) return tree.flatMap(child => nodes(child, predicate));
  return [...(predicate(tree) ? [tree] : []), ...nodes(tree.props?.children, predicate)];
}
function text(tree) {
  if (tree == null || typeof tree === 'boolean') return '';
  if (typeof tree !== 'object') return String(tree);
  if (Array.isArray(tree)) return tree.map(text).join('');
  return text(tree.props?.children);
}
const button = (tree, label) => nodes(tree, n => n.type === 'button' && text(n) === label)[0];
const links = tree => nodes(tree, n => n.props?.href).map(n => n.props.href);

test('tool selection exposes documented projects and reset restores all four connections', () => {
  const h = harness();
  const Explorer = h.load('app/components/ToolEvidenceExplorer.tsx').default;
  let tree = Explorer();
  assert.equal(links(tree).length, 4);
  assert.equal(button(tree, 'Reset').props.disabled, true);
  const expected = { Java: 'school-management', Flutter: 'mobile-app', Figma: 'domrov-lms', MongoDB: 'quiz-fun', Redis: 'quiz-fun', Nginx: 'quiz-fun' };
  for (const [tool, slug] of Object.entries(expected)) {
    button(tree, tool).props.onClick();
    tree = Explorer();
    assert.deepEqual(links(tree), [`/projects#${slug}`]);
    assert.equal(button(tree, tool).props['aria-pressed'], true);
    assert.equal(button(tree, 'All tools').props['aria-pressed'], false);
    assert.match(text(nodes(tree, n => n.props?.role === 'status')[0]), /1 project connection/);
  }
  button(tree, 'Reset').props.onClick();
  tree = Explorer();
  assert.equal(links(tree).length, 4);
  assert.equal(button(tree, 'All tools').props['aria-pressed'], true);
});

test('all declared tool assets exist, and generic SQL does not imply MySQL or PostgreSQL', () => {
  const h = harness();
  const technology = h.load('app/data/technology.ts');
  for (const { asset } of Object.values(technology.technologyByName)) {
    const svg = fs.readFileSync(`public/technology/${asset}.svg`, 'utf8');
    assert.match(svg, /<svg[\s>]/);
    assert.doesNotMatch(svg, /<script|<foreignObject|onload=|href=["']https?:/i);
  }
  assert.equal(technology.toolsForProject('cam-bookstore').length, 0);
  assert.equal(technology.evidenceTools.includes('MySQL'), false);
  assert.equal(technology.evidenceTools.includes('PostgreSQL'), false);
});

test('copy email announces success after writing the actual address', async () => {
  const writes = [];
  const h = harness({}, { navigator: { clipboard: { writeText: async value => writes.push(value) } } });
  const Copy = h.load('app/components/CopyEmail.tsx').default;
  await button(Copy({ email: 'panha@example.test' }), 'Copy email').props.onClick();
  const tree = Copy({ email: 'panha@example.test' });
  assert.deepEqual(writes, ['panha@example.test']);
  assert.ok(button(tree, 'Copied'));
  assert.match(text(nodes(tree, n => n.props?.role === 'status')[0]), /copied/);
});

test('clipboard rejection and unsupported browsers retain a retry action and honest feedback', async () => {
  for (const navigator of [{}, { clipboard: { writeText: async () => { throw new Error('denied'); } } }]) {
    const h = harness({}, { navigator });
    const Copy = h.load('app/components/CopyEmail.tsx').default;
    await button(Copy({ email: 'panha@example.test' }), 'Copy email').props.onClick();
    const tree = Copy({ email: 'panha@example.test' });
    assert.ok(button(tree, 'Copy email'));
    assert.match(text(tree), /Select the address above or use the email link/);
    assert.doesNotMatch(text(tree), /Email address copied/);
  }
});

function anchorHarness(hash, featured = false) {
  const listeners = new Map();
  const frames = new Map();
  let id = 0;
  class Details { open = false; scrollIntoView() { this.scrolled = true; } }
  class Element {}
  const details = new Details();
  const target = featured ? { querySelector: () => details, scrollIntoView() { this.scrolled = true; } } : details;
  const location = { hash, href: `http://localhost/projects${hash}`, origin: 'http://localhost' };
  const h = harness({ 'next/navigation': { usePathname: () => '/projects' } }, {
    HTMLDetailsElement: Details, Element, URL,
    window: { location, addEventListener: (name, cb) => listeners.set(name, cb), removeEventListener: name => listeners.delete(name) },
    document: { getElementById: value => value === 'school-management' || value === 'domrov-lms' ? target : null, addEventListener: (name, cb) => listeners.set(name, cb), removeEventListener: name => listeners.delete(name) },
    requestAnimationFrame: cb => { frames.set(++id, cb); return id; }, cancelAnimationFrame: key => frames.delete(key),
  });
  h.load('app/components/ProjectAnchorSync.tsx').default();
  const cleanup = h.effects[0]();
  const flush = () => { for (const cb of [...frames.values()]) cb(); frames.clear(); };
  return { details, target, listeners, location, flush, cleanup, Element };
}

test('direct archive and featured links open their native disclosures; history reopens the target', () => {
  for (const [hash, featured] of [['#school-management', false], ['#domrov-lms', true]]) {
    const h = anchorHarness(hash, featured);
    h.flush();
    assert.equal(h.details.open, true);
    assert.equal(h.target.scrolled, true);
    h.details.open = false;
    h.listeners.get('popstate')(); h.flush();
    assert.equal(h.details.open, true);
    h.cleanup();
    assert.equal(h.listeners.size, 0);
  }
});

test('same-route clicks open project notes; modified clicks do not hijack the current view', () => {
  const h = anchorHarness(''); h.flush();
  const clicked = new h.Element();
  clicked.closest = () => ({ href: 'http://localhost/projects#school-management', target: '' });
  h.listeners.get('click')({ button: 0, target: clicked, ctrlKey: true }); h.flush();
  assert.equal(h.details.open, false);
  h.listeners.get('click')({ button: 0, target: clicked }); h.flush();
  assert.equal(h.details.open, true);
  h.cleanup();
});

test('malformed and missing anchors are harmless', () => {
  for (const hash of ['#%E0%A4%A', '#not-a-project']) {
    const h = anchorHarness(hash);
    assert.doesNotThrow(h.flush);
    assert.equal(h.details.open, false);
    h.cleanup();
  }
});

test('motion honors initial reduced motion and disconnects its observer on preference change', () => {
  const mediaListeners = new Map();
  const media = { matches: true, addEventListener: (name, cb) => mediaListeners.set(name, cb), removeEventListener: name => mediaListeners.delete(name) };
  const observed = new Set();
  const element = { dataset: {} };
  let callback;
  let disconnects = 0;
  class Observer {
    constructor(cb) { callback = cb; }
    observe(value) { observed.add(value); }
    unobserve(value) { observed.delete(value); }
    disconnect() { observed.clear(); disconnects++; }
  }
  const h = harness({ 'next/navigation': { usePathname: () => '/' } }, {
    window: { matchMedia: () => media, IntersectionObserver: Observer }, IntersectionObserver: Observer,
    document: { querySelectorAll: () => element.dataset.revealed ? [] : [element] },
  });
  h.load('app/components/NotebookMotion.tsx').default();
  const cleanup = h.effects[0]();
  assert.equal(observed.size, 0);
  media.matches = false; mediaListeners.get('change')();
  assert.equal(observed.size, 1);
  callback([{ target: element, isIntersecting: false }]);
  assert.equal(element.dataset.revealed, undefined);
  callback([{ target: element, isIntersecting: true }]);
  assert.equal(element.dataset.revealed, 'true');
  assert.equal(observed.size, 0);
  media.matches = true; mediaListeners.get('change')();
  assert.ok(disconnects > 0);
  cleanup();
  assert.equal(mediaListeners.size, 0);
});
