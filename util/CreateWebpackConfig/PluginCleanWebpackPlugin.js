const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = function( NewWebpackConfig, config ){
  if( config.PluginCleanWebpackPlugin ){
    NewWebpackConfig.plugins.push(
      new CleanWebpackPlugin(
        [ NewWebpackConfig.output.path ],
        config.PluginCleanWebpackPluginOptions
      )
    );
  }
}