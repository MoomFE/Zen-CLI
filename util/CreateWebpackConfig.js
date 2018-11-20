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
  config.$each( name => {
    const fn = ExternalProcessing[ name ];

    if( fn ){
      fn( NewWebpackConfig, config )
    }
  });

  // 执行事件回调
  if( config.on && config.on.ConfigCreated ){
    config.on.ConfigCreated( NewWebpackConfig, config );
  }

  // 添加配置到队列
  WebpackConfigArray.push( NewWebpackConfig );
}


const ExternalProcessing = {
  // 插件 - 清空出口文件夹
  Plugin_CleanWebpackPlugin: require('./CreateWebpackConfig/Plugin_CleanWebpackPlugin'),
  // 自动添加 polyfill
  autoPolyfill: require('./CreateWebpackConfig/autoPolyfill'),
  // 处理 css
  builtInCss: require('./CreateWebpackConfig/builtInCss'),
  // 处理 Vue 单文件组件 ( .vue )
  useVue: require('./CreateWebpackConfig/useVue'),
  // 处理 React 单文件组件 ( .jsx )
  useReact: require('./CreateWebpackConfig/useReact')
};