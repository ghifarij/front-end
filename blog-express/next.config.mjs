/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghifarij-blogger.vercel.app",
      },
      {
        protocol: "https",
        hostname: "cdn.britannica.com",
      },
    ],
  },
};

export default nextConfig;
