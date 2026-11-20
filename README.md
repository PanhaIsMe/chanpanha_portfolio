# Cheng Chanpanha — Portfolio

A personal portfolio with an Engineering Notebook design: warm paper surfaces, green accents, contribution maps, and accessible project disclosures. Built with Next.js 16, React 19, Tailwind CSS 4, and Lucide icons.

## Run locally

```sh
npm ci
npm run dev
```

Open the Local URL printed by Next.js (normally http://localhost:3000).

Development uses Next.js's supported Webpack mode. On this Next.js 16.1.1 setup, Turbopack development repeatedly resolves the Tailwind CSS import from the parent directory instead of the application directory. `npm run dev` uses `next dev --webpack` to avoid that reproduced failure; production builds keep the existing Turbopack setup.

## Checks and production

```sh
npm run lint
npm test
npx tsc --noEmit --incremental false
npm run build
npm run start
```

The existing `next/font` integration downloads Inter and Outfit during a fresh build, so the build needs access to Google Fonts. Fonts are then served by Next.js.

## Routes

- `/`: introduction, three featured projects, skills, and contact invitation.
- `/about`: biography, education, experience, and languages.
- `/projects`: all projects, with expandable contribution notes.
- `/contact`: message form, personal and school email, Telegram, LinkedIn, both GitHub accounts, location, and phone.

## Telegram contact alerts

1. In Telegram, open [@BotFather](https://t.me/BotFather) and use `/newbot` to create a bot for the portfolio. Put its token in `.env.local` as `TELEGRAM_BOT_TOKEN`.
2. Open the new bot’s chat from your own Telegram account and tap **Start**. Run this command from the portfolio directory to print private chat IDs for updates the new bot has received. [Telegram Bot API](https://core.telegram.org/bots/api#getupdates)

   ```sh
   node --env-file=.env.local -e 'fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/getUpdates`).then(r => r.json()).then(({ok, result}) => { if (!ok) throw Error(); console.log([...new Set(result.filter(u => u.message?.chat.type === "private").map(u => u.message.chat.id))].join("\n") || "No private chat found. Send your bot a message and try again."); }).catch(() => { console.error("Could not read Telegram updates. Check the bot token and try again."); process.exitCode = 1; })'
   ```

3. Add your chat ID as `TELEGRAM_CHAT_ID` in `.env.local`, then restart the development server. Set both variables in the hosting platform’s server environment to enable delivery on the live site. Keep the token in environment settings and out of Git.

Each submitted name, reply email, and message goes to the configured chat. The contact page keeps a direct email link available if delivery fails. The form uses a Next.js server route and requires a deployment that supports it.

## Edit content

- `app/data/profile.ts`: identity, contact URLs, skills, education, languages.
- `app/data/projects.ts`: original project contributions and experience entries, presentation summaries, topic tags, and featured selection.
- `app/data/technology.ts`: local logo identifiers and explicitly documented tool-to-project connections.
- `app/globals.css`: design tokens, responsive layouts, focus styles, and reduced-motion rules.
- `app/components/`: shared navigation, footer, section headings, project entries, and contact banner.
- `public/my_image.jpg`: original portrait, delivered with responsive `next/image` sizes.
- `public/technology/`: local Devicon v2.17.0 SVGs, source manifest, and retained license. Original colors are preserved; logos have visible technology names.

## Notebook interactions

The homepage toolkit includes a “Where I used it” explorer. Select Java, Flutter, Figma, MongoDB, Redis, or Nginx to see the documented project contribution. All four default connections are server-rendered; the full project collection remains available separately. Project anchor links open the associated native disclosure on arrival, including direct URLs and browser history navigation.

Decorative motion includes the hero underline and short entrance, section rules, contribution-map connectors, logo introductions, portrait corner feedback, timeline markers, contact stamps, and footer rule. `NotebookMotion` uses one cleaned-up IntersectionObserver; text stays visible before JavaScript and with reduced motion. Hover feedback is supplemental to named links and keyboard focus. Contact includes an explicit Copy email button with success/failure announcements and the original mail link as fallback.

`npm test` runs eight focused Node tests for selection/reset, explicit evidence mappings and local assets, clipboard success/failure, deep links/history, modifier-click behavior, malformed hashes, and motion preference cleanup. These use the existing TypeScript compiler and a small component/effect harness; no testing dependency was added. They do not replace browser accessibility, viewport, clipboard-permission, or performance checks.

Personal field notes remain dependent on owner-supplied content. The optional software playground needs the separate brief described in `TOOL_LOGOS_AND_MOTION_PLAN.md`.

Project figures are labeled contribution maps. They summarize documented contribution areas; they are not product screenshots or verified system architecture. No invented project repository URLs, live demos, metrics, or resume downloads are included. Add those only when approved assets and links are available. The About link replaces the former misleading Full Resume action.

The legacy `Hero.jsx` and `ProjectBento.jsx` are dormant and do not render on any route. Their sample content is not part of the portfolio inventory. Framer Motion remains installed from the existing project; the active route entrance uses a small CSS animation with a reduced-motion override.

## Manual verification

Check every route at 320, 390, 768, 1024, and 1440 CSS pixels; also check 200% zoom. Verify keyboard focus, skip navigation, active route labels, native project disclosures, back/forward navigation, project anchors, and reduced-motion behavior. Check long email addresses and the Khmer project name for wrapping and font support. Test the portrait response and all contact destinations without sending messages.

Run Lighthouse against `npm run start` for production measurements. See `PLAN.md` for detailed acceptance targets and the implementation status. Local compile/HTTP checks do not establish visual correctness or accessibility/performance scores.

No deployment or new hosting configuration is included in this update.
