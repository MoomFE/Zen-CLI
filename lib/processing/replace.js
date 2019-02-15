

module.exports = function replace( webpackConfig, config ){
  if( config.replace ){
    if( webpackConfig.isWebpack ){
      const webpack = require('webpack');

      webpackConfig.plugins.push(
        new webpack.DefinePlugin( config.replace )
      );
    }else{
      const replace = require('rollup-plugin-replace');

      webpackConfig.inputOptions.plugins.push(
        replace( config.replace )
      );
    }
  }
}