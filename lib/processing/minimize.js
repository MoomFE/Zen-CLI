
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

          terserOptions: Object.$assign(
            {
              warnings: true,
              output: {
                comments: false
              }
            },
            config.terserOptions
          )
        })
      );
    }else{
      var { terser } = require("rollup-plugin-terser");

      webpackConfig.inputOptions.plugins.push(
        terser(
          Object.$assign(
            {
              warnings: true,
              output: {
                comments: false
              }
            },
            config.terserOptions
          )
        )
      );
    }
  }
}