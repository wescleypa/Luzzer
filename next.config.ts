import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.3.2'],
  output: 'export', // CF, remover dps
};

export default nextConfig;
