const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = function( NewWebpackConfig, config ){
  if( config.Plugin_CleanWebpackPlugin ){
    NewWebpackConfig.plugins.push(
      new CleanWebpackPlugin(
        [ NewWebpackConfig.output.path ],
        config.Plugin_CleanWebpackPluginOptions
      )
    );
  }
}