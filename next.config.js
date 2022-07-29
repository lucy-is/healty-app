const nextConfig = {
    webpack: (config, { webpack }) => {
      const prod = process.env.NODE_ENV === 'production';
      const newConfig = {
        ...config,
        mode: prod ? 'production' : 'development',
      };
      if (prod) {
        newConfig.devtool = 'hidden-source-map';
      }
      return newConfig;
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: `http://apis.data.go.kr/1471000/HtfsInfoService2/:path*`,
        },
      ];
    },
  };
  
  module.exports = nextConfig;