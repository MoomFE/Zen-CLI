
module.exports = function minimize( webpackConfig, config ){
  if( config.mode === 'production' ){
    if( webpackConfig.isWebpack ){
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
    }else{
      var { terser } = require("rollup-plugin-terser");

      webpackConfig.inputOptions.plugins.push(
        terser({
          warnings: true,
          mangle: {
            module: true,
          },
          output: {
            comments: false
          }
        })
      );
    }
  }
}