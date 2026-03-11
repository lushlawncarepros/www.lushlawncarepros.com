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
      { source: '/home/springfall-clean-up-boise-id', destination: '/services/seasonal', permanent: true },
      { source: '/lush-lawn-care-pros/springfall-clean-up-boise-id', destination: '/services/seasonal', permanent: true },
      { source: '/home/leaf-removal-boise-id', destination: '/services/seasonal', permanent: true },
      { source: '/sprinkler-blowout-boise', destination: '/services/sprinkler-blowout', permanent: true },
      { source: '/lush-lawn-care-pros/mulch-flower-beds-boise-id', destination: '/services/seasonal', permanent: true },
      { source: '/lush-lawn-care-pros/careers', destination: '/', permanent: true },
      { source: '/home/bush-trimming-boise-id', destination: '/services/shrub-care', permanent: true },
      { source: '/lush-lawn-care-pros/bush-trimming-boise-id', destination: '/services/shrub-care', permanent: true },
    ];
  }
};

export default nextConfig;
