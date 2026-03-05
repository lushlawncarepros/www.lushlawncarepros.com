import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/lawn-treatment-program', destination: '/services/fertilization', permanent: true },
      { source: '/lawn-aeration', destination: '/services/aeration', permanent: true },
      { source: '/sprinkler-blowout', destination: '/services/sprinkler-blowout', permanent: true },
      { source: '/bush-trimming-boise-id', destination: '/services/shrub-care', permanent: true },
      { source: '/springfall-clean', destination: '/services/seasonal', permanent: true },
      { source: '/lawn-care-meridian-id', destination: '/', permanent: true },
      { source: '/mowing', destination: '/services/mowing', permanent: true },
      { source: '/fertilization', destination: '/services/fertilization', permanent: true },
      { source: '/bed-weeding', destination: '/services/weed-control', permanent: true },
      { source: '/seasonal', destination: '/services/seasonal', permanent: true },
      { source: '/knowledge-vault', destination: '/vault', permanent: true },
      { source: '/knowledge-vault/:slug', destination: '/vault/:slug', permanent: true },
    ];
  }
};

export default nextConfig;
