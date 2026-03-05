import { resolve } from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    typescript: {
        ignoreBuildErrors: true,
    },
    turbopack: {
        root: resolve(__dirname, "../../"),
    },
};

export default nextConfig;
