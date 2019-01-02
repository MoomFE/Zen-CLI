
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
      var Terser = require("terser");

      webpackConfig.inputOptions.plugins.push({
        name: 'terser',
        renderChunk( code, chunk, outputOptions ){
          return Terser.minify( code, {
            output: {
              comments: false
            }
          });
        }
      });
    }
  }
}