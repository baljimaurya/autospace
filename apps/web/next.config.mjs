/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required to generate 'out/' folder
  images: {
    remotePatterns: [
      { hostname: "api.mapbox.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
