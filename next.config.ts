import { createJiti } from "jiti";
import type { NextConfig } from "next";

const jiti = createJiti(import.meta.url);

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
await jiti.import("./src/env");

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://cdn.coralinfantilsetubal.com/**")],
  },
};

export default nextConfig;
