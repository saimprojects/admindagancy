# AdMind Agency

A responsive creative-agency website built with React, JSX, Vite and Tailwind CSS 4. Uses the supplied AdMind logo, its blue/navy palette, self-hosted Manrope fonts and three original campaign concepts.

## Run locally

```bash
npm ci
npm run dev
```

The development URL is `http://127.0.0.1:5173`.

```bash
npm run build
npm run preview
```

Production files are generated in `dist/`. This is a static React site; no application server or API keys are required.

Use Node.js 22 (at least 22.12). `package.json` and `.nvmrc` select the 22.x major supported by Vercel. The committed lockfile is used for reproducible installs.

```bash
npm test
npm run check:build
```

The build also verifies required assets and rejects private configuration files or source maps in the public output.

## Contact form — one activation step required

The enquiry form posts directly to `https://formsubmit.co/ajax/Owner@mostmailer.com` through FormSubmit. It includes name, reply email, company, service, optional budget, project brief, a spam honeypot and the submission URL.

**Before accepting real enquiries, submit an initial enquiry from the final deployed domain and click the activation link FormSubmit emails to `Owner@mostmailer.com`.** Check the spam folder too. Then send a second test enquiry and verify it arrives in the inbox. A new domain may require activation again. This is a provider-side action that only the mailbox owner can complete.

No real email was sent during implementation. Browser checks mock the provider response to verify loading, acceptance and failure states without contacting anyone. Actual inbox delivery is not verified. The UI only shows success when the provider reports acceptance; it does not claim guaranteed delivery.

The form retains entered content on error, prevents duplicate pending submissions, uses a 20-second request timeout and includes native required/email validation. Direct email, telephone and WhatsApp contact options work independently of the form provider.

Official documentation:

- https://formsubmit.co/ajax-documentation
- https://formsubmit.co/documentation
- https://formsubmit.co/help

## Main files

- `src/App.jsx`: page sections, work previews, service/FAQ accordions, contact form and privacy notice.
- `src/styles.css`: responsive layout, design tokens, component styling and motion.
- `src/main.jsx`: React entry point and self-hosted fonts.
- `src/videos/1.mp4`, `2.mp4`, `3.mp4`: uploaded work films, shown in that order.
- `src/components/WorkVideoCard.jsx` and `WorkVideoPlayer.jsx`: muted previews and the full video player.
- `public/images/`: optimized campaign images and supplied logo.
- `public/favicon.svg`: small AdMind-inspired favicon.
- `vercel.json`: Vercel build settings, security policy and static-asset caching.
- `scripts/`: production metadata generation and output checks.
- `.env.example`: optional canonical-domain setting; no secrets are needed.
- `VERCEL.md`: deployment instructions and the remaining email activation step.
- `.openai/hosting.json`: legacy Sites identity, excluded from Vercel uploads.

## Content and artwork

The hero uses the PULSE, FORME and DAYBREAK concept artwork. The Work section displays the supplied fragrance, beverage and headphones videos in the order `1.mp4`, `2.mp4`, `3.mp4`. It makes no client affiliation or performance claims.

Work cards use still frames extracted from their own videos as posters. Videos are imported from `src/videos`, so Vite includes fingerprinted MP4 files in the production build. Hover or keyboard focus starts a muted, looping preview when the card is visible. Leaving the card, scrolling it offscreen, hiding the tab or opening the player pauses previews. Clicking or tapping opens the full video with audio and native playback controls; if the browser blocks audio playback, an explicit play button is available. Closing the dialog stops its audio.

The light header uses the supplied original logo. Dark contexts use a vector adaptation. Campaign artwork was created for this site with ImageGen and optimized to WebP. Platform names identify intended ad formats, not partnerships or endorsements.

The page includes keyboard-accessible dialogs with Escape dismissal and restored focus, reduced-motion support, responsive navigation, semantic form labels, visible focus styles, a skip link and click-to-call/WhatsApp links. The contact form privacy notice explains the FormSubmit processor.

## Deploy to Vercel

See [VERCEL.md](./VERCEL.md). Import the Git repository containing this project into Vercel, use the directory containing this `package.json` as the project root, and select **Vite**. The committed configuration sets installation to `npm ci`, build to `npm run build`, and output to `dist`.

The normal Vercel setup requires no environment variables. Leave automatic system environment variables enabled. For a preferred custom domain, set `SITE_URL` to its HTTPS origin and redeploy; otherwise the stable Vercel production domain is used for canonical and sitemap URLs. Preview and custom staging builds generate `noindex` metadata and a restrictive robots file.

This change prepares the project for Vercel; it does not create or deploy a Vercel project. The previous Sites deployment is independent.

Replace concept projects with approved real work as it becomes available. Pricing, production schedules, revisions and usage rights are agreed per project rather than fabricated on the page.
