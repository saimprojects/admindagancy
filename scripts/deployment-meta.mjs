export function deploymentMeta(env = {}) {
  const target = env.VERCEL_TARGET_ENV || env.VERCEL_ENV;
  const noindex = Boolean(target && target !== "production");
  const configured = env.SITE_URL?.trim();
  const detected = env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  let origin;

  if (configured || detected) {
    let url;
    try {
      url = new URL(configured || `https://${detected}`);
    } catch {
      throw new Error(
        "SITE_URL must be a valid HTTPS origin, without a path or credentials.",
      );
    }
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      url.pathname !== "/" ||
      url.search ||
      url.hash ||
      url.port ||
      url.hostname === "localhost" ||
      url.hostname.endsWith(".localhost") ||
      !url.hostname.includes(".") ||
      /^\[?[\d.:]+\]?$/.test(url.hostname)
    ) {
      throw new Error(
        "SITE_URL must be a public HTTPS origin, without a path, port or credentials.",
      );
    }
    origin = url.origin;
  }

  if (target === "production" && !origin) {
    throw new Error(
      "Enable Vercel system environment variables or set SITE_URL to the production HTTPS origin.",
    );
  }

  const canonical = origin ? `${origin}/` : null;
  const escaped = canonical?.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
  const tags = [
    `<meta name="robots" content="${noindex ? "noindex, nofollow" : "index, follow"}" />`,
    ...(canonical
      ? [
          `<link rel="canonical" href="${escaped}" />`,
          `<meta property="og:url" content="${escaped}" />`,
        ]
      : []),
  ];

  return {
    canonical,
    noindex,
    tags: tags.join("\n    "),
    robots: noindex
      ? "User-agent: *\nDisallow: /\n"
      : `User-agent: *\nAllow: /\n${origin ? `\nSitemap: ${origin}/sitemap.xml\n` : ""}`,
    sitemap:
      origin && !noindex
        ? `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escaped}</loc></url></urlset>\n`
        : null,
  };
}
