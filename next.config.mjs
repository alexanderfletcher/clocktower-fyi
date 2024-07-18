/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/speculated",
        destination:
          "https://www.bloodstar.xyz/p/piglix/Full_Unreleased_Characters/almanac.html",
        permanent: false,
      },
      {
        source: "/speculated/editions",
        destination:
          "https://www.bloodstar.xyz/p/piglix/Unreleased_Editions/almanac.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
