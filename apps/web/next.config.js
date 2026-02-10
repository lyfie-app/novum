/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/lyfie-app/novum",
        permanent: true,
      },
      {
        source: "/sdk",
        destination: "https://www.npmjs.com/package/novum",
        permanent: true,
      },
      {
        source: "/npm",
        destination: "https://www.npmjs.com/package/novum",
        permanent: true,
      },
      {
        source: "/svelte",
        destination: "https://github.com/tglide/novum-svelte",
        permanent: false,
      },
      {
        source: "/vue",
        destination: "https://github.com/naveennaidu/novum-vue",
        permanent: false,
      },
      {
        source: "/vscode",
        destination:
          "https://marketplace.visualstudio.com/items?itemName=bennykok.novum-vscode",
        permanent: false,
      },
      {
        source: "/feedback",
        destination: "https://github.com/lyfie-app/novum/issues",
        permanent: true,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/novum",
        permanent: true,
      },
    ];
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
