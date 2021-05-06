module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.less$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader', // translates CSS into CommonJS
      }, {
        loader: 'less-loader', // compiles Less to CSS
        options: {
         lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
           modifyVars: {
            'primary-color': '#f96302',
            'heading-color': '#666666',
            'text-color': '#666666',
            'radio-size': '20px',
            'checkbox-size': '18px',
           },
           javascriptEnabled: true,
         },
      },
      }],
    });

    // Return the altered config
    return config;
  },
};