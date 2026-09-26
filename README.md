# AdMind Agency

A responsive creative-agency website built with React, JSX, Vite and Tailwind CSS 4. Uses the supplied AdMind logo, its blue/navy palette, self-hosted Manrope fonts and three original campaign concepts.

## Run locally

```bash
npm install
npm run dev
```

The development URL is `http://127.0.0.1:5173`.

```bash
npm run build
npm run preview
```

Production files are generated in `dist/`. This is a static React site; no application server or API keys are required.

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
- `public/images/`: optimized campaign images and supplied logo.
- `public/favicon.svg`: small AdMind-inspired favicon.
- `.openai/hosting.json`: Sites identity and static output directory.

## Content and artwork

PULSE, FORME and DAYBREAK are independent studio concepts, explicitly labeled as such. They are not client projects, video samples, testimonials or performance case studies. No invented clients, results, awards, office location or delivery promises are presented.

The light header uses the supplied original logo. Dark contexts use a vector adaptation. Campaign artwork was created for this site with ImageGen and optimized to WebP. Platform names identify intended ad formats, not partnerships or endorsements.

The page includes keyboard-accessible dialogs with Escape dismissal and restored focus, reduced-motion support, responsive navigation, semantic form labels, visible focus styles, a skip link and click-to-call/WhatsApp links. The contact form privacy notice explains the FormSubmit processor.

## Publishing

The site is configured for static Sites hosting. Its first hosted version is private to the owner. Public sharing and a custom domain can be configured when the owner is ready to launch.

Replace concept projects with approved real work as it becomes available. Pricing, production schedules, revisions and usage rights are agreed per project rather than fabricated on the page.
