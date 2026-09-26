import test from "node:test";
import assert from "node:assert/strict";
import { deploymentMeta } from "./deployment-meta.mjs";

test("production uses a preferred custom domain consistently", () => {
  const meta = deploymentMeta({
    VERCEL_ENV: "production",
    SITE_URL: "https://ads.example.com/",
    VERCEL_PROJECT_PRODUCTION_URL: "fallback.vercel.app",
  });
  assert.equal(meta.canonical, "https://ads.example.com/");
  assert.equal(meta.noindex, false);
  assert.match(meta.robots, /Sitemap: https:\/\/ads.example.com\/sitemap.xml/);
  assert.match(meta.sitemap, /<loc>https:\/\/ads.example.com\/<\/loc>/);
});

test("Vercel's stable production domain is used instead of a preview URL", () => {
  const meta = deploymentMeta({
    VERCEL_ENV: "production",
    VERCEL_PROJECT_PRODUCTION_URL: "admind.vercel.app",
    VERCEL_URL: "branch-random.vercel.app",
  });
  assert.equal(meta.canonical, "https://admind.vercel.app/");
});

test("preview and custom staging builds cannot advertise an indexable sitemap", () => {
  for (const target of ["preview", "staging"]) {
    const meta = deploymentMeta({
      VERCEL_ENV: "preview",
      VERCEL_TARGET_ENV: target,
      VERCEL_PROJECT_PRODUCTION_URL: "admind.vercel.app",
    });
    assert.match(meta.tags, /noindex, nofollow/);
    assert.equal(meta.robots, "User-agent: *\nDisallow: /\n");
    assert.equal(meta.sitemap, null);
    assert.equal(meta.canonical, "https://admind.vercel.app/");
  }
});

test("a local build doesn't invent a production domain", () => {
  const meta = deploymentMeta();
  assert.equal(meta.canonical, null);
  assert.equal(meta.sitemap, null);
  assert.doesNotMatch(meta.tags, /canonical|og:url/);
});

test("production fails clearly if domain detection is disabled", () => {
  assert.throws(
    () => deploymentMeta({ VERCEL_ENV: "production" }),
    /Enable Vercel system environment variables/,
  );
});

test("rejects URLs that could leak credentials or create misleading canonical links", () => {
  for (const SITE_URL of [
    "not a URL",
    "http://example.com",
    "https://user:secret@example.com",
    "https://example.com/path",
    "https://example.com/?key=secret",
    "https://example.com/#preview",
    "https://localhost",
    "https://127.0.0.1",
    "https://example.com:444",
  ]) {
    assert.throws(() => deploymentMeta({ SITE_URL }), /SITE_URL must be/);
  }
});
