# Tool Logos, Motion & Interactive Portfolio Plan

Status: implemented locally following your instruction to execute this plan. Core logos, motion, evidence exploration, and selected optional details are complete. The catalogue below preserves the design brief; verification limits and deferred content are recorded here.

Implementation record:

- Added original-color local SVG logos for all 14 technologies in the existing toolkit, with visible names and fixed dimensions. Added Next.js and Tailwind CSS marks to the build credit; a TypeScript mark is stored for build-stack identification. Assets come from Devicon v2.17.0; sources and license are in `public/technology/`.
- Added the hero notebook entrance and green underline, linked portrait corner feedback, active-navigation feedback, section rules, map connector tracing and node emphasis, project annotations, disclosure feedback, staggered logo introductions, timeline markers, contact stamps, link arrow feedback, copy-email success/failure feedback, and a closing footer rule.
- Added the “Where I used it” explorer with All tools/reset, selected-state semantics, four server-rendered project connections, and the six explicitly documented tool selectors. Skills without a documented project mapping remain in the toolkit without invented connections.
- Project links open the matching native disclosure on direct entry, same-route clicks, and history navigation. Modified/new-tab clicks are left alone. Existing routes, claims, portrait, and all nine projects remain.
- One viewport observer progressively adds decoration and cleans up on route/preference changes. Essential text is never hidden waiting for animation. Reduced-motion rules remove decorative transitions; all content and controls remain available.
- The production build and TypeScript check pass. Eight focused interaction tests pass for filtering/reset, mapping/assets, clipboard success/failure, deep links/history, malformed hashes, modified clicks, and reduced-motion cleanup. All four production pages and all 16 local SVG URLs return 200. Production markup retains one h1 per route, unique IDs, all nine disclosures, and valid internal route/fragment links.
- Browser inventory exposes no connected browser, so visual viewport checks, real keyboard/touch/screen-reader behavior, actual browser clipboard permissions, and Lighthouse measurements remain unverified. Automated interaction tests use a component/effect harness and are not browser tests.
- Original logo colors were chosen to preserve the supplied artwork. No new skills, dependencies, tracking, backend, or hosting were added. The existing Webpack development workaround is retained.
- Deferred as specified by the brief: personal field notes and handwritten personal details require your actual content; the optional software playground requires its separate approval/brief. No project decisions or personal habits were invented.

This extends `PLAN.md`. Keep the green Engineering Notebook identity, Software Developer positioning, four existing routes, actual portrait, and existing project inventory.

## 1. Creative idea: a notebook that responds

Make the portfolio feel like an engineer's working notebook coming to life: a section rule draws in, project contribution notes connect, tool labels reveal the work behind them, and an open project receives a small green annotation.

Use a shared visual language across these moments:

- Emerald for emphasis, forest green for readable actions, warm paper for the canvas.
- Fine rules, corner marks, diagram connectors, tabs, and understated stamp shapes.
- Outfit and Inter remain the primary fonts; monospace labels provide technical detail.
- Each interaction rewards exploration with useful information. Avoid making every section perform the same entrance effect.
- Combine several small interactions with two or three memorable signature moments. Many different ideas can exist across the site without running simultaneously.

Recommended signature moments: the hero notebook composition, contribution-map tracing, and a tool-to-project connection explorer.

## 2. Tool and technology logos

### Inventory supported by the current portfolio

The following names already appear in `app/data/profile.ts`. Their inclusion reflects the existing portfolio, not a newly verified level of expertise.

| Group | Proposed labeled logos |
| --- | --- |
| Backend & systems | Node.js, NestJS, Express.js, Java, Spring Boot |
| Data & infrastructure | PostgreSQL, MySQL, MongoDB, Redis, Nginx |
| Web & mobile | React, Next.js, Flutter, Figma |

Keep GitHub and LinkedIn as named profile/contact links. The portfolio itself uses Tailwind CSS and TypeScript; they may appear in a clearly labeled “Built with” note without implying their use in every featured project.

Do not silently add VS Code, Git, Docker, Postman, AWS, Python, design apps, game engines, or other tools. Ask which you actually use before expanding this inventory. AI/ML stays a learning interest unless you supply specific tools and work.

### Placement and presentation

1. **Homepage toolkit:** retain the existing three skill groups. Pair each technology name with a recognizable 20–24px logo, with consistent visual weight and enough spacing to scan easily.
2. **Project notes:** show smaller logos only for technology explicitly connected to that project in the source or later confirmed by you. Keep non-technology topics such as leadership and algorithms as text tags.
3. **About:** optionally include a short “Tools in practice” reference to the toolkit. Avoid repeating the full logo collection on multiple pages.
4. **Footer:** optionally add a restrained Next.js / Tailwind CSS build credit. It should stay secondary to your contact details.

Recommended default: an orderly static logo collection with subtle individual feedback. An endlessly scrolling logo marquee would make the names harder to inspect and would add a pause-control requirement.

### Logo treatment and sourcing

- Use authentic SVG brand assets from official sources or a maintained collection whose individual marks and usage guidance have been checked during implementation. No AI-generated approximations of technology logos.
- Use an official monochrome variant where permitted; otherwise retain the brand's required colors. Place green accents on the surrounding UI rather than recoloring every logo.
- Normalize visual size, not just SVG dimensions. A wide wordmark and a square symbol need different sizing.
- Keep visible text labels so a logo is never the only identifier. With an adjacent name, the SVG is decorative to assistive technology.
- Store approved assets locally, record their sources and any required attribution, and avoid runtime hotlinking or downloading an entire icon package for a small set of marks.
- Confirm Java and other brand-specific assets individually; do not substitute an unrelated coffee cup or approximate mark.
- A missing or unsuitable logo falls back to a text label. Do not let asset availability block access to content.

### Technology-to-project evidence

| Technology | Connection already documented | Proposed action |
| --- | --- | --- |
| Java | School Management System | Open that project’s contribution notes |
| Flutter | ងាយម្រា App | Open that project’s contribution notes |
| Figma | Domrov LMS Automation | Open that project’s contribution notes |
| MongoDB, Redis, Nginx | Quiz Fun | Open that project’s contribution notes |
| Other listed technologies | General profile claims; exact project mapping is not supplied | Keep descriptive labels until you confirm a project connection |

SQL in Cam Bookstore does not establish whether the database was PostgreSQL or MySQL. Do not attach either logo without confirmation. A project using Flutter does not establish every team member's specific implementation work beyond the existing description.

## 3. Animation and micro-interaction catalogue

The timings below are design starting points, subject to device testing. They describe future work, not current functionality.

| # | Idea and location | Trigger and behavior | Purpose | Priority |
| --- | --- | --- | --- | --- |
| 01 | **Notebook opening — hero** | On first view, the eyebrow, title, description, and portrait settle into place in a short 300–450ms sequence. Use a small vertical offset and fade rather than a full-screen loading animation. | Establish the visual identity without delaying work/contact actions. | First release |
| 02 | **Green editorial underline — hero** | Draw a thin SVG underline beneath a short heading accent once, over roughly 450ms. Reserve layout space before animation. | Give the introduction a personal annotation. | First release |
| 03 | **Portrait corner marks** | On pointer hover or keyboard focus of an adjacent real About link, corner marks shift by 2–4px and the frame gently straightens. Touch uses a stable frame. | Make the portrait feel intentional and connected to About. | Optional |
| 04 | **Active navigation marker** | A small green line or dot transitions to the active item. Hover and focus provide the same clear emphasis; current-page semantics remain. | Reinforce orientation across routes. | First release |
| 05 | **Section rule reveal** | When a section first enters the viewport, its divider scales from left to right in 250–350ms. Its text stays visible. | Create chapter-like pacing without animating every paragraph. | First release |
| 06 | **Contribution-map tracing** | The existing map root and connectors reveal in order once as the project enters view. The three contribution areas follow with a modest stagger. | Draw attention to the work you contributed. Keep the “Contribution map” label. | Signature |
| 07 | **Project annotation** | Hover, focus-within, or an open disclosure adds a short green rule and a corner marker beside the project title. No card or page follows the cursor. | Make project exploration feel like opening a notebook entry. | First release |
| 08 | **Contribution disclosure** | Activating a project summary rotates the plus into a cross; new content receives a short fade. Preserve native keyboard behavior and expanded state. | Provide clear feedback when opening project details. | First release |
| 09 | **Logo ink-in** | Tool logos appear in a small 30–40ms stagger when the toolkit first becomes visible; cap the whole group sequence at about 400ms. | Introduce the toolkit as a collection. | First release |
| 10 | **Tool label feedback** | On an interactive tool button’s hover/focus, its border darkens and a small indicator appears. A pointer-only tilt is unnecessary; static labels should not look like buttons. | Clarify which tools can reveal related work. | With explorer |
| 11 | **Evidence highlight** | Selecting a supported tool highlights its related project links with a short background transition. Keyboard and tap work equally. | Connect skills to concrete contributions. | Signature |
| 12 | **Timeline margin marker — About** | Each education/experience entry receives a one-time dot-and-rule reveal. Dates and content are always readable. | Support the notebook timeline narrative. | Second release |
| 13 | **Contact note stamp** | The existing contact note straightens or receives one small stamp reveal on first entry; it then stays still. | Give the end of the journey a memorable sign-off. | Second release |
| 14 | **Link arrow response** | Real links move their arrow by 2–3px on hover/focus over 150–180ms. | Provide a consistent action cue. | First release |
| 15 | **Copy-email confirmation** | An optional explicit Copy email button briefly changes its label to “Copied” after clipboard success, with a polite status announcement. Failure leaves the address selectable and mail link usable. | Make contacting you easier. | Optional |
| 16 | **Closing notebook motif — footer** | A small decorative rule and your existing brand mark finish a one-time reveal as the footer enters view. | Give the page a designed ending. | Optional |

The combined system is unique through its composition and relationship to your work. These are design concepts, not claims that an effect is exclusive or never used elsewhere.

## 4. Viewer interactions worth building

### A. “Where I used it” tool explorer — recommended

Let a visitor select Java, Flutter, Figma, MongoDB, Redis, or Nginx and see a short, factual connection to the documented project, followed by an “Explore contribution” link.

- Use buttons with clear selected states and a small result panel; retain all project access elsewhere.
- Each result states your documented contribution, not simply the project's technology stack.
- Provide a default “All tools” state and a reset action. Do not hide the existing toolkit or featured projects when nothing is selected.
- Selecting a project link should navigate to its anchor and open the corresponding disclosure so the visitor sees the requested notes immediately. Direct anchor links and browser history must still work.
- No external API, database, or account is needed.

This is the strongest first interactive addition because it helps visitors evaluate your experience.

### B. Project field notes — recommended after content confirmation

Add a compact “One decision I made” or “What I learned” note inside each featured project. A margin marker can reveal the note through a keyboard/touch-accessible disclosure.

Ask you for the actual decision, alternatives, and lesson. Existing bullet points are not enough to invent a technical trade-off, problem severity, or measured outcome. If you do not supply the content, keep the current contribution notes.

### C. Small software playground — optional signature addition

An optional “Notebook experiment” could let visitors add a few fictional tasks to a queue, step through processing, and reset. A tiny state diagram could explain the transition from waiting to processing to complete.

- Clearly label it an educational portfolio experiment, not a deployed feature from Domrov or another project.
- Keep it click-driven, deterministic, and browser-local. No real payments, backend requests, or user data storage.
- Include a plain-language explanation, accessible status updates, and a reset button.
- Put it after the actual work or on an explicitly approved extension of the existing Projects page; never make it the hero’s main attraction.
- This expands scope beyond visual polish and needs separate approval. Recommend completing logos and the evidence explorer first.

### D. Personal detail with substance — content-dependent

A short handwritten-style margin note could explain a genuine development habit, a problem you enjoy solving, or something you learned from a project. Ask you for the actual detail. This can make the portfolio more personal without an additional animation library or invented biography.

## 5. Motion rules and boundaries

- **Entrance:** approximately 250–450ms, usually 6–12px of movement. A one-time decorative diagram trace can take up to about 700ms, with labels visible immediately.
- **Feedback:** approximately 120–200ms. Use a consistent easing curve rather than a different bounce for every element.
- **Frequency:** play decorative reveals once per page visit. Avoid replaying every time a visitor scrolls up and down; avoid timers and storage solely to track animation views.
- **Density:** at most one prominent decorative sequence in the viewport at a time. Do not stack section, card, text, and logo entrances on the same content.
- **Readability:** no scramble effect on your name, role, technology labels, or essential copy. No typewriter delay before visitors can understand the page.
- **Movement:** favor opacity, transforms, and short SVG strokes. Keep geometry stable; do not animate blur, big shadows, or layout dimensions continuously.
- **Scrolling:** keep native scrolling, navigation, selection, and browser shortcuts. No scroll hijacking, forced horizontal scroll, or mandatory full-screen intro.
- **Pointer:** retain the system cursor. Any decorative pointer behavior is nonessential and must disappear on touch/reduced-motion devices.
- **Sound:** none by default. No autoplay audio or flashing/strobing effects.
- **Touch:** hover can enhance an action, but cannot contain its only label, evidence, or control.
- **Reduced motion:** immediately show final decorative states; remove spatial entrances, connector tracing, stagger delays, and frame movement. Keep usable controls and textual feedback.
- **Continuous effects:** exclude autoplay marquees, perpetual floating badges, and cursor particles from the recommended scope. If later requested, reassess their purpose and pause/stop controls.

## 6. Implementation approach after approval

Reuse the current stack. CSS handles simple state feedback and decorative rules. Native disclosures remain the base for project notes. The already-installed Framer Motion may handle bounded sequences or presence transitions when CSS becomes awkward; do not introduce GSAP, Three.js, or a scroll-smoothing dependency by default.

Suggested future component changes:

| Area | Proposed work |
| --- | --- |
| `app/data/profile.ts` | Add approved logo identifiers and explicit evidence links; keep names and claims centralized |
| `app/data/projects.ts` | Add only your supplied lessons/decisions and confirmed tool mappings |
| `public/technology/` | Store approved SVG assets and a source/attribution record |
| `ToolBadge` | Shared visible name, logo, and optional real action; avoid one-off markup per technology |
| `ToolEvidenceExplorer` | Isolated client interaction for supported mappings |
| `ProjectEntry` | Existing map/disclosure behavior plus the approved reveal and deep-link expansion |
| `SectionHeader` | Optional one-time divider reveal, not a blanket text-hiding wrapper |
| `app/globals.css` | Shared timing/easing tokens, focus feedback, and reduced-motion overrides |

Read-only sections should remain server-rendered. Scope client code to interactions. Use one reusable viewport observer strategy where needed, clean up observers, and avoid per-frame React updates or a scroll listener per item. Essential text and project links must work before client hydration and when decorative JavaScript is unavailable.

Keep the verified Webpack development command and existing production setup; this visual proposal does not require changing bundlers, dependency versions, routing, hosting, or contact infrastructure.

## 7. Suggested delivery order

1. **Logo pass:** confirm technology inventory and artwork treatment; source the approved SVGs; implement consistent labeled marks and responsive layout.
2. **Core motion pass:** hero composition, section rules, navigation/link feedback, project annotation, and accessible disclosure feedback.
3. **Signature pass:** contribution-map tracing and the supported tool-to-project evidence explorer. Review desktop/mobile behavior before adding more effects.
4. **Personality pass:** timeline, contact stamp, and genuine project field notes if supplied. Choose selectively based on the page’s pacing.
5. **Optional experiment:** implement the small software playground only after separate approval and a clear content brief.
6. **Verification:** run the checks below and simplify effects that impair reading, touch, performance, or accessibility.

Recommend shipping the logo pass and core motion first, then adding the two signature interactions. The full catalogue provides options; it is not a requirement to animate all sixteen ideas at once.

## 8. Done when

| Area | Practical acceptance check |
| --- | --- |
| Scope | The implementation diff contains only the approved features. No invented tool usage, new projects, accounts, or unrequested infrastructure. |
| Logo accuracy | Every displayed technology matches the approved inventory; asset sources/usage requirements are recorded; names remain visible if an SVG fails. |
| Evidence | Each interactive tool connects to documented work; SQL does not silently become a particular database product; unknown mappings remain absent. |
| Layout | Inspect all four routes at 320, 390, 768, 1024, and 1440 CSS pixels and 200% zoom. No clipped logos, overflowing labels, or moving layout from asset loading. |
| Keyboard | Tab through real controls, operate tool selection and disclosures with Enter/Space, verify focus visibility, and check skip navigation. |
| Touch | Use a touch viewport/device. No information or primary action depends on hover or pointer position. |
| Reduced motion | Enable the preference before loading and while viewing. Decorative motion stops, final content stays visible, and explorer/disclosure/copy controls remain functional. |
| Deep links | Open each project anchor directly and from the tool explorer; the correct contribution notes are visible. Test browser back/forward and reload. |
| Motion pacing | Scroll down and back up. Reveals do not endlessly replay, multiple effects do not compete, and text is readable immediately. |
| No JavaScript | With client JavaScript disabled, the portfolio still exposes names, project descriptions, ordinary navigation, and native disclosures; advanced tools degrade to readable content. |
| Performance | Compare production builds before/after under identical mobile Lighthouse settings and inspect a representative interaction trace. No persistent off-screen animation, uncleaned observer, or avoidable bundle growth. Keep the performance targets in `PLAN.md`; do not claim a score without measuring it. |
| Correctness | Build, lint, and TypeScript checks pass; all four routes and local logo assets resolve; no browser errors occur during the core journeys. |
| Accessibility | Manually inspect focus order and announcements; run an accessibility scan. Decorative logos and SVG paths do not add repetitive screen-reader noise. |

## 9. Questions and decisions for you

1. **Is the existing technology list complete?** Which everyday tools do you actually use—such as VS Code, Postman, Docker, or a game engine—and should any current skills be removed or marked as learning? Recommendation: only add tools you confirm.
2. **Do you prefer monochrome logos or original brand colors?** Recommendation: official monochrome variants where permitted, visible names, and green surrounding accents. Use required original colors for brands without a suitable monochrome treatment.
3. **How expressive should motion feel?** Recommendation: polished and noticeable, with the hero, contribution maps, and evidence explorer as the main moments; keep reading sections calm.
4. **Which optional ideas appeal most?** Choose portrait corner feedback, a contact stamp, copy-email feedback, project field notes, or a software playground. Recommendation: prioritize field notes and the evidence explorer because they help explain your work.
5. **Can you confirm tool-to-project connections and provide a real lesson or decision for each featured project?** Recommendation: begin with the explicitly documented Java, Flutter, Figma, MongoDB, Redis, and Nginx connections; expand only with your input.

Your later instruction to execute this plan authorized the implemented scope above. Remaining work is factual content for field notes, the separately scoped playground if requested, and browser-based acceptance verification.
