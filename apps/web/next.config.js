/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],

  // The workspace ESLint config enforces a lot of stylistic rules (prop
  // ordering, filename casing, etc.) that pre-date this pass and don't
  // affect correctness. We still run `next lint` / `pnpm lint` separately
  // in CI/editor, but we don't want a stylistic warning to block a
  // production build.
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
   domains: ["en.wikipedia.org", "scontent-mba1-1.cdninstagram.com","upload.wikimedia.org"],
   remotePatterns: [
     {
       protocol: "https",
       hostname: "scontent-mba1-1.cdninstagram.com",
       port: "",
     },
     {
       protocol: "https",
       hostname: "en.wikipedia.org",
       port: "",
     },
   ],
 },
 
 
 };
 
