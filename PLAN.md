# Portfolio Upgrade Plan

Status: core portfolio update implemented locally following your instruction to update the portfolio from this plan. Remaining content and visual verification items are recorded below.
Audit date: 11 November 2026.
Confirmed preferences: Engineering Notebook direction, preserving the existing green identity; primary positioning as a software developer. Backend experience is a supporting strength within this broader role. Your later request authorized implementation of this roadmap. Remaining factual questions still require your input.
Original planning scope: inspect the existing portfolio and document an actionable upgrade plan. That audit is preserved below as the baseline; the subsequent implementation updates the existing application locally without deployment or framework migration.

Implementation record:

- Redesigned all four routes with warm paper surfaces, existing emerald/forest green, Outfit/Inter, responsive layouts, and Software Developer positioning.
- Centralized profile, contacts, skills, education, languages, nine projects, and two experience entries in `app/data/`.
- Added three featured project contribution maps and native contribution disclosures, plus six archive disclosures. Maps summarize existing contribution areas; they are not screenshots or verified architecture diagrams. Original contribution bullets are retained without invented metrics or technical decisions.
- Moved existing experience entries to About; kept education and languages. Preserved all six contact destinations, phone, and location. Reused the specific LinkedIn URL already present on Contact throughout the site.
- Added a skip link, current-page semantics, named links, focus styles, route-specific metadata, responsive portrait sizes, and reduced-motion rules. Replaced the misleading resume action with an About link.
- Simplified the faulty ref-based route transition to a brief CSS entrance. Existing dependencies and dormant sample components remain; a typographic lint error in dormant Hero was fixed without activating it.
- Production build, ESLint, and TypeScript checks pass. Production HTTP checks return 200 for all four routes and the portrait. Parsed production HTML verifies one `h1` per route, unique IDs, correct active navigation, working internal route/fragment destinations, and all nine disclosures. A data comparison against the original Git version confirms preservation of all project contribution bullets and both experience records.
- Follow-up development fix: reproduced Next.js 16.1.1 Turbopack repeatedly resolving Tailwind from the parent folder. `npm run dev` now uses the supported `--webpack` flag, with all four development routes and the compiled stylesheet returning 200. The Turbopack build root is anchored to the config directory with `__dirname`; production build tooling and dependencies are unchanged. The separate stale Browserslist data warning is informational.
- Browser inspection was attempted but the native browser connection timed out. Rendered viewport checks, keyboard/screen-reader interaction, reduced-motion behavior, console inspection, and Lighthouse results remain unverified. These acceptance targets are not claimed as passed.
- Still needed for richer case studies: approved project screenshots, repository/demo links, exact stacks and trade-offs, and an actual CV. No placeholder downloads or invented project evidence were added. Academic dates, project status, and other original facts remain subject to the questions in Section 7.

## 1. What It Is

### Purpose and current foundation

A personal portfolio for Cheng Chanpanha that helps employers understand your direction, assess your actual contributions, explore your projects, and contact you. You describe yourself in this request as a fourth-year software development student and have confirmed software developer as your preferred professional positioning. The existing site positions you as a backend-focused Computer Science student at CADT; the upgrade should present your confirmed experience across software development, with backend work as a supporting strength. The exact degree wording and dates need confirmation.

The repository is an existing Next.js App Router application, not an empty starter:

| Area | Current implementation |
| --- | --- |
| Framework | Next.js 16.1.1; React and React DOM 19.2.3 |
| Styling | Tailwind CSS 4, PostCSS, global theme tokens |
| Language | TypeScript for root layout and homepage; JSX for other pages and shared components; strict TypeScript configuration with JavaScript allowed |
| UI tools | Lucide icons, Framer Motion; clsx is installed |
| Routes | `/`, `/about`, `/projects`, `/contact` |
| Shared shell | Navbar, Footer, PageTransition in `app/components/` |
| Assets | `public/my_image.jpg` (approximately 113 KB), starter SVGs, favicon |
| Tooling | npm lockfile; dev, build, start, and lint scripts; ESLint 9 |
| Backend | No application API routes, contact submission service, database, or authentication found in the inspected source |

### Audit: strengths

- The homepage already communicates a backend interest, shows your portrait, introduces skills, features Domrov LMS and Quiz Fun, and offers contact actions.
- The projects route contains nine projects and two experience entries with roles, dates, and contribution descriptions. This is valuable raw material for a stronger presentation.
- About includes education and languages. Contact includes personal and school email, Telegram, LinkedIn, and two GitHub profiles.
- The shared shell, reusable project `InfoCard`, responsive grids, image optimization component, and existing font setup provide a practical foundation.
- Styling already has an emerald identity and body/display typography. Preserve that continuity if you want it.
- Ordinary navigation and direct contact links keep the visitor journey simple.

### Audit: weaknesses and opportunities

| Finding and source | Effect | Proposed response |
| --- | --- | --- |
| `app/page.tsx` uses similar rounded cards, badges, gradients, and repeated section treatments | Limited visual distinction and little evidence of your engineering approach | Introduce an editorial hierarchy and project-specific evidence |
| Featured project cards and `/projects` provide no repository, live-demo, or case-study links | Visitors cannot readily inspect the work | Add only supplied, approved destinations and explain unavailable demos honestly |
| Project copy lists activities without much context, technical reasoning, or demonstrable results | Personal contribution and judgment are difficult to assess | Structure featured work around problem, role, decisions, and evidence |
| “Full Resume” links to `/about`; no resume file found | The label promises more than the destination provides | With approval, add a supplied CV or relabel the existing action |
| Footer LinkedIn uses `your-profile`, while Contact has a specific profile URL | Inconsistent and potentially broken professional contact path | Confirm and centralize the correct URL |
| `Hero.jsx` and `ProjectBento.jsx` are not imported by the inspected application source | Dormant components contain frontend branding, placeholder contacts, `/profile.jpg`, and sample projects | Keep dormant pending approval; never promote their sample content as your work |
| Homepage, metadata, and dormant Hero use different role descriptions | Positioning is inconsistent | Agree on one primary role and distinguish interests from experience |
| Footer social links are icon-only without accessible names; active navigation lacks `aria-current`; no skip link found | Accessibility gaps in shared navigation | Add accessible labels, current-page state, and skip navigation |
| CSS and Framer Motion do not handle reduced motion; homepage badge bounces indefinitely | Motion preferences are not respected | Add reduced-motion behavior and remove continuous decorative movement with approval |
| `/projects` begins with an Experience `h2` and has no `h1` | Weak page orientation and heading hierarchy | Add a clear Projects page heading and supporting introduction |
| White text on bright emerald and small gray labels appear throughout | Potential contrast and readability problems | Measure actual text/background combinations before selecting final tokens |
| Navbar keeps all links in a narrow pill; global `w-screen` and overflow hiding can conceal layout problems | Small-screen fit and focus visibility need verification | Test narrow screens and zoom; solve overflow at its source |
| Contact values use truncation | Full email addresses may be hard to read on narrow screens | Prefer wrapping and readable labels; retain functional links |
| Home imports `@/assets/my_image.jpg`, but no `assets` directory exists; the actual image uses `/my_image.jpg` | Stale unused import creates maintenance risk | Remove the unused import during approved cleanup; do not describe it as a verified runtime failure |
| `PageTransition` reads a ref while rendering; its `exit` has no surrounding AnimatePresence | Transition behavior and lint compatibility need review | Validate the existing behavior and simplify to a modest route entrance if appropriate |
| Shared root metadata and starter README remain; no project imagery or CV found | Discoverability, handoff documentation, and evidence are incomplete | Add route-specific metadata, accurate README, and approved assets |

### Verification performed and limits

- `tsc --noEmit --incremental false` passes on the current checkout.
- The local development server returns HTTP 200 for all four routes.
- Development startup warns that multiple lockfiles cause Next.js to infer `/Users/biney` as the workspace root. Propose explicitly setting this project's root after checking the intended workspace; do not remove unrelated lockfiles.
- No browser-connected preview was available. Visual findings above are based on source, not rendered screenshot inspection. Mobile fit, contrast, keyboard behavior, animations, assistive technology, and performance remain unverified.
- Production build, lint, Lighthouse, external-link destinations, and project claims have not been validated in this phase. HTTP success and TypeScript success do not establish those results.

### Recommended creative direction: Engineering Notebook

Present the portfolio as a carefully composed record of how you build software. Use editorial page layouts, numbered project entries, quiet technical captions, and diagrams grounded in your actual work. Your engineering decisions become the memorable visual material.

Art direction: Engineering Notebook and retaining green are confirmed preferences; the detailed treatment below remains proposed for review.

- Preserve the existing emerald (`#10B981`) as the main brand accent, with the existing forest green (`#047857`) for primary actions and text where stronger contrast is needed. Pair with a proposed warm paper background (`#F6F5EF`), ink text (`#17201C`), and existing mint (`#D1FAE5`) supporting surfaces. Green remains the primary color; the editorial layout supplies the new identity. Final combinations must pass contrast checks.
- Keep Outfit for expressive headings and Inter for readable body copy initially. Use the system monospace stack sparingly for dates, indices, and diagram labels. Check Khmer rendering for the existing Khmer project name and add a suitable fallback if needed.
- A prominent name and the role “Software Developer” lead the hero. Support this with a factual introduction that reflects your student status and confirmed project experience, including backend strengths. Place the existing portrait in a restrained rectangular frame alongside the introduction. Put the introduction before the portrait on mobile.
- Replace uniform card repetition with varied but consistent project spreads: a strong title, role and stack, a screenshot or verified system diagram, and one clear exploration action.
- Illustrate an actual workflow from one approved project, such as a payment or data flow, after you confirm its implementation. Label explanatory diagrams; never present a conceptual diagram as a screenshot or deployed architecture.
- Use restrained line reveals and short fades. Hover/focus feedback should clarify what is clickable. All project evidence must be accessible without hover, animation, or a pointer.
- Keep normal scrolling and predictable navigation. Avoid scroll hijacking, custom cursors, a fake terminal, and decorative 3D in the initial scope.

Why this fits: the existing portfolio includes APIs, databases, algorithms, web and mobile work, and other software projects. Engineering Notebook can connect these through how you solve problems, make implementation decisions, and contribute to working software. Backend experience remains valuable evidence within your broader software developer identity. A readable explanation of a real engineering decision makes that identity concrete.

Alternatives considered: a dark technical studio offers a stronger screen-oriented mood but needs equally careful readability work; a refined light emerald direction offers the smallest aesthetic change. Your selected Engineering Notebook direction can retain the current green identity, so a different main color is unnecessary.

## 2. Who Uses It

| Audience | Main question | Intended path |
| --- | --- | --- |
| Recruiters | Who are you, what role do you seek, and how can I contact you? | Hero → featured work → CV/contact |
| Hiring managers | What did you personally build and how do you reason? | Featured project → contribution and decisions → source/demo |
| Developers | What is technically interesting and inspectable? | Projects → architecture/code links → GitHub |
| Collaborators and other visitors | What interests you and are you open to collaboration? | About → selected work → preferred contact channel |

The homepage should answer identity and direction quickly. Deeper pages should provide substance without forcing every visitor through a long animation or interaction.

## 3. What Is In and What Is Out

### Included: existing capabilities and proposed improvements

| Area | Existing | Proposed upgrade |
| --- | --- | --- |
| Home | Intro, portrait, skills, two featured projects, contact banner | Software Developer positioning, editorial hero, two or three evidence-led projects, skills tied to work, concise contact invitation |
| About | CADT and ACE education; Khmer, English, Japanese | Confirmed biography, education timeline, existing experience entries, verified language levels |
| Skills | Three broad expertise cards and icons | Group confirmed skills into backend, data, web/mobile, and tools only where applicable; separate learning interests; no proficiency percentages |
| Projects | Nine project entries and two experience entries | Preserve all entries; feature the strongest two or three and retain remaining work in a readable archive |
| Project exploration | Static contribution cards | Expandable case studies on `/projects` initially, using native disclosure semantics and visible summaries |
| Contact | Six direct contact destinations plus footer contact information | Clear primary contact method, consistent verified profiles, accessible link labels, readable values |
| Resume | Link to About | Supplied PDF download/view action or an honestly labeled About action, pending approval |
| Navigation | Fixed pill with active styling; route animation | Retain four routes, improve hierarchy, keyboard states, narrow-screen fit, and reduced-motion behavior |
| Site quality | Shared metadata, theme, and components | Consistent tokens, accurate metadata, real social preview asset if approved, responsive images, documented checks |

Content order proposed for Home: identity and role → featured projects → skills supported by those projects → brief education/about pointer → contact. Existing skills and contact content remain represented even if their order changes.

Propose moving the two experience entries from the Projects presentation to About, where they fit the narrative better. This requires approval; preserve their original wording and dates until confirmed. No existing route should disappear.

Each featured case study should contain: title; dates and current status; team context; your role and personal contribution; problem and intended users; confirmed stack; implementation choices and trade-offs; screenshot or safe diagram; verified result or honest qualitative outcome; repository/demo links when shareable. Unknown fields are content requests, not invitations to invent details.

### Optional, outside the initial acceptance scope

- Dedicated `/projects/[slug]` pages if approved case studies become substantial or need individual sharing metadata. This adds routing and content maintenance; expand beyond inline disclosures only when useful.
- A copy-email button with an accessible success/failure message and a working mail link fallback.
- Project filters only if the archive becomes difficult to scan; nine projects may not justify another control.
- A theme toggle, blog, bilingual content, or lightweight interactive diagram after the core portfolio succeeds and you confirm an ongoing need.

### Excluded

No authentication, database, CMS/admin panel, contact backend, analytics/tracking, new hosting service, deployment, heavy 3D library, scroll-smoothing library, fabricated projects, invented metrics, unverified awards/testimonials, or wholesale rewrite. No removal of current features or dormant files without approval. A future deployment is a separate scope decision.

### Actionable implementation sequence after approval

1. **Confirm direction and facts.** Resolve the priority questions in Section 7; create an approved content inventory with unknowns and publication permissions marked. Select featured projects and define their required evidence.
2. **Establish a baseline.** Capture desktop/mobile screenshots once browser access is available. Run lint and production build, record pre-existing failures, and check all existing actions. Address confirmed stale imports, placeholder links, and workspace-root configuration within the approved scope.
3. **Design one representative slice.** Define tokens for color, spacing, type, borders, and motion. Produce a desktop/mobile homepage treatment plus one project case study for your review before extending the design across the site.
4. **Implement the shared foundation.** Improve Navbar, Footer, focus states, skip navigation, responsive containers, and reduced-motion behavior. Centralize approved profile and project content; keep routes working throughout.
5. **Build the evidence-led experience.** Apply the approved hero and project layout, add approved media and case studies, organize skills, and update About and Contact. Wire the CV only when the actual approved file exists.
6. **Verify and hand off.** Complete Section 6 checks, resolve regressions, record remaining limitations, and update README with setup and content-editing instructions. Present the finished local result for review; publication requires a separately agreed destination and scope.

Dependencies: final copy requires your factual confirmation; project media and public links require shareable assets; CV functionality requires a supplied file; full visual QA requires browser access. Layout work can proceed with clearly labeled development placeholders after approval, but placeholders cannot ship as your work.

## 4. What It Keeps

- Keep Next.js, React, Tailwind, npm, the existing App Router, and the four public routes. No framework migration is proposed.
- Preserve your name, portrait, existing project and experience inventory, education, languages, and contact channels as audit inputs. Publish factual revisions only after confirmation.
- Preserve all nine named project entries: Domrov LMS Automation, Cam Bookstore, Ecomind Game, Advanced Algorithms Bank Management System, School Management System, ងាយម្រា App, Quiz Fun, Game No Longer Exits, and Database Administration Computer Store System. Check names and spelling with you before changing them.
- Preserve both experience entries: Next-Gen Engagement and Winning University's Life event. Confirm whether the latter is an event name rather than an award; do not infer an achievement from its wording.
- Keep the portrait at `public/my_image.jpg`; optimize responsive delivery and `sizes` rather than replacing your identity with generated imagery.
- Reuse Navbar, Footer, PageTransition, and the useful `InfoCard` structure where appropriate. Keep direct email/social navigation and the existing opportunity message pending confirmation of availability.
- Keep unused Hero and ProjectBento files untouched until cleanup is approved. Their EcoTracker App, Finance Dashboard, and University Portal content is unverified sample content, not part of the real project inventory.

### Proposed incremental architecture

- Add typed content modules such as `app/data/profile.ts` and `app/data/projects.ts` so contact destinations, project descriptions, and featured selections have one source of truth.
- Extract only repeated structures: SectionHeader, ProjectEntry, ProjectCaseStudy, SkillGroup, and ContactLink as needed. Avoid a broad component abstraction exercise.
- Keep content-rendering pages as server components; isolate client code to navigation state, modest transitions, and any approved interactive control.
- Use CSS for hover/focus effects. Keep Framer Motion for motion that warrants it; do not add an animation library or remove the current one without an approved reason.
- Define consistent Tailwind theme tokens in `app/globals.css`; avoid accumulating separate hard-coded palettes across components.
- Convert touched JSX components to TypeScript where it helps validate shared content; a repository-wide conversion is not required.
- Replace the generic README with actual project setup, routes, content locations, asset guidance, and verification commands. Do not upgrade dependencies merely for the redesign.

Trade-off: this preserves working structure and limits migration risk, while leaving room for richer case studies later. Moving experience content, changing transition behavior, replacing the resume action, and deleting dormant files remain explicit review decisions.

## 5. Who May Do What

| Actor | Allowed interactions |
| --- | --- |
| Any visitor | Browse all four routes, read project summaries and case studies, follow approved repositories/demos and professional profiles, view/download an approved CV, and initiate contact through direct links |
| Keyboard or assistive-technology user | Access the same content and actions, skip repeated navigation, identify current route, operate disclosures, and follow visible focus |
| Reduced-motion visitor | Read all content and navigate without spatial route transitions, repeating bounce effects, or motion-dependent reveals |
| Portfolio owner | Review factual content and design decisions; maintain static content and assets in the repository |

No visitor account, editing interface, data collection, or permission system is needed. Email links open a mail application; they do not send a message automatically. Telegram and profile links open their destinations. The site must not claim a message was delivered without a real submission mechanism.

Public contact details already include a phone number and neighborhood-level location. Preserve them during planning, but confirm what you want publicly displayed before the redesign. Recommendation: show Phnom Penh and your preferred professional contact method unless you prefer the existing detail.

## 6. Done When

These are acceptance targets for the later implementation, not claims that the current site passes.

| Requirement | Acceptance criterion | Practical verification |
| --- | --- | --- |
| Visual identity | Approved palette, typography, spacing, and project presentation are consistent across four routes; no unexplained mixture of old and new UI | Compare screenshots of all routes at 390px and 1440px against approved representative designs; review with you |
| First impression | Hero states your confirmed name and Software Developer positioning, with clear work and contact paths; important identity text precedes imagery on mobile | Inspect the initial viewport and mobile reading order; ask a reviewer to identify your intended role and next action |
| Responsive layout | No clipped content or unintended horizontal scrolling at 320, 390, 768, 1024, and 1440 CSS pixels; long titles, Khmer names, and emails remain readable | Resize every route, inspect `scrollWidth` versus viewport, test portrait/landscape and 200% zoom, and check reflow at 320 CSS pixels |
| Navigation | All four routes remain reachable, current page is indicated semantically, header does not obscure content or focus, and browser back/forward work | Click every nav/CTA/footer link; test direct route loading, history, keyboard traversal, and skip link |
| Project presentation | All nine existing entries remain represented; two or three approved featured projects show role, problem, contribution, decisions, evidence, and status | Reconcile against the original inventory and approved content; open each disclosure and each supplied source/demo link |
| Truthful content | No invented achievements, metrics, skills, project stack, screenshots, or availability; no sample projects presented as yours | Owner review of the content inventory, published copy, image captions, and skill-to-project mapping |
| Resume and contact | Resume label matches its actual behavior; if approved, the real PDF loads and downloads; contact URLs are consistent and usable | Open/view/download the supplied PDF, check HTTP response and filename, and inspect every mail/profile/Telegram destination without sending messages |
| Accessibility | Target WCAG 2.2 AA: semantic landmarks, one clear page `h1`, logical headings, named icon links, visible focus, and meaningful image alternatives | Run an accessibility scan and manual keyboard test on all routes; perform a VoiceOver or NVDA smoke test of navigation, project disclosures, and contact |
| Contrast and targets | Normal text contrast at least 4.5:1; large text and meaningful UI boundaries at least 3:1; primary touch controls aim for 44×44 CSS pixels | Measure final tokens in default, hover, focus, and active states; inspect target sizes and spacing on narrow screens |
| Motion | Decorative transitions are brief, generally 150–400ms; no essential content waits for animation; reduced-motion removes spatial and repeating decorative motion | Toggle reduced motion at OS/browser level, navigate all routes, and test content access when animations are disabled |
| Interaction parity | Pointer, touch, and keyboard users can access equivalent information; no essential hover-only content; disclosure controls expose state | Operate every interactive element with keyboard and touch; inspect accessible names and expanded state |
| Performance | On a production build, median of three consistent mobile Lighthouse runs targets Performance ≥90, Accessibility ≥95, Best Practices ≥95, SEO ≥95; lab LCP ≤2.5s and CLS ≤0.1 | Record production URL/build, device preset, throttling, and three results; inspect image sizing, font loading, bundle changes, and layout shifts |
| Runtime responsiveness | No sustained visual stutter in representative navigation/disclosure interactions; field INP target ≤200ms if sufficient real-user data becomes available | Record a browser performance trace under mobile CPU throttling; distinguish lab observations from unavailable field data |
| Functional correctness | Production build and configured lint pass, all four production routes return success, portrait/media resolve, and no application errors occur during core journeys | Run `npm run build`, `npm run lint`, and `tsc --noEmit --incremental false`; smoke-test via `npm run start`; inspect console/network |
| Metadata | Each route has an accurate title/description; share image and canonical URL use confirmed assets/domain if supplied | Inspect rendered document head; check social preview asset response; never invent the production domain |
| Maintainability | Shared content is centralized, changes are scoped, dependencies are justified, and README describes maintenance | Review the diff, search for duplicate profile/project data and placeholders, and follow README setup/content-editing steps |
| Preservation | Approved feature changes are documented; no accidental loss of routes, content, contact channels, or portrait | Compare the original inventory and core visitor journeys with the completed site |

Use focused automated coverage for substantive interactive logic if introduced, such as filtering or copy feedback. A static style change does not require tests that merely duplicate markup. An automated accessibility score does not replace manual accessibility checks. Lighthouse targets must be reported with conditions; field Core Web Vitals cannot be promised from local testing.

## 7. Questions for Me

### Priority 1: direction and scope

1. **Software Developer is confirmed as your preferred positioning. Are there specific software development opportunities or employers you want to prioritize?** Recommendation: present your confirmed experience across projects, retain backend strengths as supporting evidence, and avoid implying seniority beyond your experience.
2. **Engineering Notebook with the existing green identity is confirmed. Do you prefer the proposed warm paper background or your current clean white, and are Outfit/Inter and restrained motion acceptable?** Recommendation: retain emerald and forest green, keep the existing fonts initially, and use brief, purposeful transitions. The main color does not need to change.
3. **Roadmap implementation was authorized by your request to update the portfolio.** Experience now appears on About, the misleading resume action is relabeled, and repeating motion is simplified. All four routes remain. Dormant sample components are retained, and no framework or backend was added.

### Priority 2: facts and evidence

4. **What are your exact degree title, current year, enrollment date, expected graduation date, current location, and current availability?** The source says CADT, Computer Science, and 2024–Present; your request says fourth-year software development student. Recommendation: publish your confirmed academic wording and dates, without inferring a graduation year. Confirm whether ACE is ongoing and whether the language levels are current.
5. **Which two or three projects best represent you, and what may be shared?** Recommendation: evaluate Domrov LMS Automation, Cam Bookstore, and Quiz Fun first based on the existing descriptions. Supply approved repository/demo URLs, screenshots or diagrams, exact stacks, team context, personal responsibilities, one technical trade-off, and outcomes. Confirm whether Domrov is still ongoing. Private projects can use approved, redacted explanations.
6. **Are all project and experience names, dates, roles, and descriptions accurate?** Confirm the Khmer project title, “Game No Longer Exits,” the spelling/meaning of “Winning University's Life event,” and permission to publish project details. Recommendation: retain original names until you confirm corrections; distinguish coursework, volunteer experience, and employment accurately.
7. **Which technologies represent hands-on project experience and which are learning interests?** Confirm homepage claims including Spring Boot, NestJS, Node.js/Express, React/Next.js, PostgreSQL, MySQL, MongoDB, Redis, Nginx, Flutter, and AI/ML interests. Recommendation: tie skills to actual projects and avoid proficiency ratings or unsupported expertise claims.
8. **Do you have an approved resume PDF and any updated portrait or project assets?** Recommendation: keep the existing portrait unless you prefer another; offer a CV only after a real file is supplied. Until then, label the current About destination accurately after approval.

### Priority 3: contact, audience, and handoff

9. **Which contact method and GitHub account should be primary, and is the LinkedIn URL on Contact correct?** Should the phone, neighborhood-level address, school email, and alternate GitHub remain public? Recommendation: lead with personal email, main GitHub, and confirmed LinkedIn; retain other channels according to your preference.
10. **Should the main site remain English, and are you targeting Cambodia, remote opportunities, or another audience?** Recommendation: English-first initially, preserving Khmer project naming with correct rendering. A full bilingual site adds translation and maintenance work.
11. **Is there an existing live domain/hosting setup, a deadline, or a specific device/browser requirement?** Recommendation: keep the current hosting arrangement and agree on deployment separately; prioritize one complete homepage and case study for early design review before extending the system.

Engineering Notebook, retaining green, Software Developer positioning, and implementation of the roadmap are authorized. The core update is implemented locally. The remaining questions concern factual confirmation, richer project evidence, CV assets, and future deployment scope; browser-based acceptance checks remain outstanding as described in the implementation record.
