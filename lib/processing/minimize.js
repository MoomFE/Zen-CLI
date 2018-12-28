
module.exports = function minimize( webpackConfig, config ){
  if( webpackConfig.isWebpack ){

    if( config.mode === 'production' ){
      const TerserPlugin = require('terser-webpack-plugin');

      webpackConfig.optimization = {
        minimize: true,
        minimizer: []
      };

      webpackConfig.plugins.push(
        new TerserPlugin({
          cache: true,
          parallel: true,

          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      );

    }

  }
}