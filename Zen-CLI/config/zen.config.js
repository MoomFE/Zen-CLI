

module.exports = {
  // 存放多个应用配置, 默认继承默认配置
  pipe: [
    
  ],
  // 应用默认配置
  config: {

    // 模式
    mode: 'development', // production

    // 入口文件夹
    entry: 'src/',
    // 出口文件夹
    output: 'dist/',
    // 入口文件名
    entryFilename: 'index.js',
    // 出口文件名
    outputFilename: 'index.[chunkhash].js',

    // 是否使用 "clean-webpack-plugin" 清理输出目录
    PluginCleanWebpackPlugin: true,
    // 插件 "clean-webpack-plugin" 的配置
    PluginCleanWebpackPluginOptions: {
      // 允许清理根目录以外的文件夹
      allowExternal: true,
      // 不显示在控制台
      verbose: false,
      // 监听模式下也依旧清空文件夹
      watch: true
    }
  }
}