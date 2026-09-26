# Vercel deployment

## Project settings

The deployable project is `D:/PROJECTS/Admind Agancy/admind-site`.

| Setting          | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| Framework preset | Vite                                                  |
| Root directory   | Directory containing `package.json` and `vercel.json` |
| Install command  | `npm ci`                                              |
| Build command    | `npm run build`                                       |
| Output directory | `dist`                                                |
| Node.js          | 22.x                                                  |

If the repository contains the files currently inside `admind-site`, leave Root Directory as `.`. If the repository contains the parent `Admind Agancy` folder's contents, select `admind-site`. Do not select `src` or `dist` as the project root.

## Deploy from Git

1. Push this project's source and `package-lock.json` to your Git repository.
2. In Vercel, choose **Add New → Project**, import the repository and use the settings above. `vercel.json` supplies the build, install and output settings.
3. Leave **Automatically expose System Environment Variables** enabled. No API keys are required.
4. Deploy. The build checks output assets and creates crawler metadata for the selected environment.
5. If using a custom domain, add it in Vercel's Domains settings, complete its DNS configuration, then set `SITE_URL` to the preferred HTTPS origin and redeploy.

## Deploy from the CLI

From this project directory, after logging into the intended Vercel account:

```bash
npx vercel
```

This creates a preview deployment. After reviewing it, publish to production:

```bash
npx vercel --prod
```

The `.vercel` account/project association is intentionally ignored by Git. No account has been linked or deployment performed as part of production preparation.

## Domain and indexing

`SITE_URL` is optional and build-time only. Set it to an origin such as `https://your-real-domain.com`, with no page path, query parameters or credentials. The example domain is not a configured deployment value.

Without `SITE_URL`, the build uses `VERCEL_PROJECT_PRODUCTION_URL`, never the temporary branch URL. Vercel production builds emit canonical and Open Graph URLs plus a one-page sitemap. Section anchors are parts of the home page and are not separate sitemap pages.

Preview and custom staging builds emit `noindex, nofollow`, disallow crawling and omit the sitemap. This is an indexing instruction, not an access restriction; Vercel Deployment Protection controls private access. Local builds without a known domain omit canonical URLs and the sitemap instead of inventing a URL.

The site uses hash links such as `/#work`. A catch-all rewrite is deliberately unnecessary: existing static assets resolve normally, and unknown file paths keep Vercel's real 404 response.

## Email activation before accepting enquiries

1. Open the **final production domain** and submit an initial test enquiry.
2. Check `Owner@mostmailer.com`, including spam, for the FormSubmit activation message and confirm it.
3. Submit another enquiry and confirm its complete contents reach the inbox and that replying addresses the submitter.

Activation and actual inbox delivery have not been verified. No email was sent by the automated checks. Form success means FormSubmit accepted a request; it does not prove inbox delivery. Email and WhatsApp links are available independently.

## Production behavior

- Vercel serves only the static `dist` output; no Node server or database runs in production.
- Hashed files in `/assets/` use a one-year immutable cache. Unhashed `/images/` files revalidate so updates do not leave stale artwork in browsers.
- Security headers block MIME sniffing and framing. The content security policy permits local scripts, fonts and images, plus FormSubmit requests. Inline styles remain allowed for the existing React animations; inline scripts and `eval` are not enabled.
- Vercel's toolbar or future third-party scripts may be blocked by this policy. Review the policy explicitly when adding integrations rather than widening it to all origins.
- `.env*`, local QA captures, `.openai` metadata and `.vercel` account settings are excluded from CLI uploads. Never place credentials in `VITE_*` variables, which are visible in the browser bundle.

## Checks

```bash
npm ci
npm test
npm run build
npm run preview
```

Review the production domain after deploying: hero/work images, mobile navigation, enquiry form, `/robots.txt`, `/sitemap.xml`, a genuine 404 for a missing asset, and the security headers. The email inbox check above needs the mailbox owner's activation.

References: [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite), [Vercel configuration](https://vercel.com/docs/project-configuration/vercel-json), [system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables), [supported Node versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions), [FormSubmit activation help](https://formsubmit.co/help).
