import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // optimizePackageImports can cause __webpack_modules__[moduleId] is not a function with some packages
  // experimental: { optimizePackageImports: ["@mantine/core", "@mantine/hooks"] },
};

export default nextConfig;
