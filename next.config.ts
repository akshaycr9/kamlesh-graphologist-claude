import type { NextConfig } from "next";

// ── Static export flag ──────────────────────────────────────────────────────
// Set NEXT_STATIC_EXPORT=true in CI to produce a fully static `out/` bundle
// suitable for GitHub Pages. In dev / Vercel / self-hosted the flag is unset
// and the full Next.js server (including the /api/* route) is used.
const isStaticExport = process.env.NEXT_STATIC_EXPORT === "true";

// ── Base path ────────────────────────────────────────────────────────────────
// GitHub Pages hosts repos at  https://<user>.github.io/<repo>/
// NEXT_PUBLIC_BASE_PATH should be  /<repo-name>  in the CI env.
// Locally it is empty string so development works with no sub-path.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Switch to pure static export when building for GitHub Pages.
  ...(isStaticExport && { output: "export" }),

  // Sub-directory path required by GitHub Pages project sites.
  basePath,

  // Trailing slash makes every page a directory (index.html inside),
  // which GitHub Pages's static file server expects.
  trailingSlash: isStaticExport,

  images: {
    // next/image optimisation requires a server; disable for static export.
    unoptimized: isStaticExport,
    remotePatterns: isStaticExport
      ? []
      : [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
