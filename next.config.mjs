/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me"], // ✅ Allow this external image domain
  },
};

export default nextConfig;
