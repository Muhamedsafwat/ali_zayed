/** @type {import('next').NextConfig} */
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig = {
  experimental: {
    reactCompiler: false,
  },

  images: {
    domains: ["localhost"],
  },
};

export default withPayload(nextConfig);
