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
  plugins.push(
    new CleanWebpackPlugin([ NewWebpackConfig.output.path ], {
      // 允许清理根目录以外的文件夹
      allowExternal: true,
      // 不显示在控制台
      verbose: false,
      // 监听模式下也依旧清空文件夹
      watch: true
    })
  );
  

  return NewWebpackConfig;
}