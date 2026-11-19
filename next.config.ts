import type { NextConfig } from "next";
import { resolve } from "node:path";

const nextConfig: NextConfig = { outputFileTracingRoot: resolve(process.cwd()), images: { unoptimized: true } };
export default nextConfig;
