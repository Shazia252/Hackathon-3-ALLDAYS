import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Example domain
        port: '', // Leave blank if there's no specific port
        pathname: "/images/**", // Allow all paths from the domain
      },
    ],
  },
};

module.exports = nextConfig;

