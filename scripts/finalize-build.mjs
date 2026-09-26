import { readFile, writeFile, rm } from "node:fs/promises";
import { loadEnv } from "vite";
import { deploymentMeta } from "./deployment-meta.mjs";

const meta = deploymentMeta({
  ...loadEnv("production", process.cwd(), "SITE_"),
  ...process.env,
});
const filename = new URL("../dist/index.html", import.meta.url);
const html = await readFile(filename, "utf8");
const marker =
  /<!-- deployment-meta:start -->[\s\S]*?<!-- deployment-meta:end -->/;
if (!marker.test(html))
  throw new Error("Missing deployment metadata marker in index.html.");
await writeFile(
  filename,
  html.replace(
    marker,
    `<!-- deployment-meta:start -->\n    ${meta.tags}\n    <!-- deployment-meta:end -->`,
  ),
);
await writeFile(new URL("../dist/robots.txt", import.meta.url), meta.robots);
const sitemapFile = new URL("../dist/sitemap.xml", import.meta.url);
if (meta.sitemap) await writeFile(sitemapFile, meta.sitemap);
else await rm(sitemapFile, { force: true });
console.log(
  `Deployment metadata: ${meta.noindex ? "noindex preview" : "indexable"}; canonical ${meta.canonical ? "configured" : "omitted until a production domain is known"}.`,
);
