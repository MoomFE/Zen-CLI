/**
 * 创建 webpack 配置
 * @param {String} entry 当前文件文件夹
 * @param {String} filePath 当前文件完整路径
 * @param {any} config 当前配置
 * @param {any} WebpackConfig 上一级用来继承的 webpack 配置
 * @param {any} WebpackConfigArray 生成 webpack 完成后, 存放的路径
 */
module.exports = function(
  entry, filePath,
  config,
  WebpackConfigArray
){
  /** 当前文件的 Webpack 配置 */
  const NewWebpackConfig = require('./CreateWebpackConfig/index')( config, entry, filePath );

  // 搜索可配置项进行配置
  config.$each(( name, options ) => {
    const fn = ExternalProcessing[ name ];

    if( fn ){
      fn( NewWebpackConfig, config )
    }
  });

  WebpackConfigArray.push( NewWebpackConfig );
}


const ExternalProcessing = {
  // 插件 - 清空出口文件夹
  PluginCleanWebpackPlugin: require('./CreateWebpackConfig/PluginCleanWebpackPlugin'),
  // 自动添加 polyfill
  autoPolyfill: require('./CreateWebpackConfig/autoPolyfill'),
  // 处理 css
  builtInCss: require('./CreateWebpackConfig/builtInCss')
};