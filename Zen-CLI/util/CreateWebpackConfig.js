const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = function(
  rootEntry, rootOutput,
  entry, filePath,
  config,
  WebpackConfig
){
  /**
   * 当前文件的 Webpack 配置
   */
  const NewWebpackConfig = Object.$assign( {}, WebpackConfig );
  /**
   * Webpack 插件列表
   */
  const plugins = NewWebpackConfig.plugins = NewWebpackConfig.plugins || [];

  // 入口信息
  NewWebpackConfig.entry = {};
  NewWebpackConfig.entry[ entry ] = filePath;

  // 出口信息
  NewWebpackConfig.output.path = entry.replace( rootEntry, rootOutput );


  // 插件 - 清空出口文件夹
  if( config.PluginCleanWebpackPlugin ){
    plugins.push(
      new CleanWebpackPlugin( [ NewWebpackConfig.output.path ], config.PluginCleanWebpackPluginOptions )
    );
  }

  return NewWebpackConfig;
}