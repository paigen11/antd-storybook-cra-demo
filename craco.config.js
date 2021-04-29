const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {  
            '@primary-color': '#f96302',
            '@heading-color': '#666666',
            '@text-color': '#666666',
            '@radio-size': '20px',
            '@checkbox-size': '18px',
           },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};