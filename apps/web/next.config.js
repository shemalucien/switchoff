/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],

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
 
