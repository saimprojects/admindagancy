import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../dist/", import.meta.url));
const html = await readFile(path.join(root, "index.html"), "utf8");
assert(html.includes("AdMind Agency"), "Missing site metadata");
assert(
  !html.includes('src="/src/'),
  "Unbuilt source entrypoint in production HTML",
);
assert(html.includes('name="robots"'), "Missing robots metadata");
const assetPaths = [...html.matchAll(/(?:src|href)="(\/[^"#?]+)"/g)].map(
  (match) => match[1],
);
assert(
  assetPaths.some((asset) => asset.endsWith(".js")),
  "Missing JavaScript bundle",
);
assert(
  assetPaths.some((asset) => asset.endsWith(".css")),
  "Missing stylesheet",
);
for (const asset of assetPaths) await access(path.join(root, asset));
for (const asset of [
  "robots.txt",
  "favicon.svg",
  "images/admind-logo.webp",
  "images/headphones.webp",
  "images/perfume.webp",
  "images/daybreak.webp",
  "images/work-01.webp",
  "images/work-02.webp",
  "images/work-03.webp",
]) {
  await access(path.join(root, asset));
}
const bundledAssets = await readdir(path.join(root, "assets"));
for (const number of [1, 2, 3]) {
  assert(
    bundledAssets.some((filename) =>
      new RegExp(`^${number}-.+\\.mp4$`).test(filename),
    ),
    `Missing bundled work video ${number}`,
  );
}

async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    assert(
      !entry.name.startsWith(".env") &&
        ![".git", ".openai", ".vercel", "qa"].includes(entry.name),
      `Unexpected private file in output: ${entry.name}`,
    );
    assert(
      !entry.name.endsWith(".map"),
      "Source maps must not be published by this build",
    );
    if (entry.isDirectory()) await inspect(path.join(directory, entry.name));
  }
}
await inspect(root);
console.log(
  "Production output verified: HTML, scripts, CSS, artwork, work videos, crawler metadata and output isolation.",
);
