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

  // 处理
  ExternalProcessing.forEach(({ handler }) => {
    handler( NewWebpackConfig, config );
  });

  // 执行事件回调
  if( config.on && config.on.ConfigCreated ){
    config.on.ConfigCreated( NewWebpackConfig, config );
  }

  // 添加配置到队列
  WebpackConfigArray.push( NewWebpackConfig );
}


const ExternalProcessing = [
  {
    name: 'mode',
    handler: require('./CreateWebpackConfig/1. Mode')
  },
  {
    name: 'to',
    handler: require('./CreateWebpackConfig/2. To')
  },
  {
    name: 'autoPolyfill',
    handler: require('./CreateWebpackConfig/3. AutoPolyfill')
  },
  {
    name: 'builtInCss',
    handler: require('./CreateWebpackConfig/4. BuiltInCss')
  },
  {
    name: 'browserslist',
    handler: require('./CreateWebpackConfig/5. Browserslist')
  },
  {
    name: 'useVue',
    handler: require('./CreateWebpackConfig/6. UseVue')
  },
  {
    name: 'useReact',
    handler: require('./CreateWebpackConfig/7. UseReact')
  },
  {
    name: 'useLess',
    handler: require('./CreateWebpackConfig/8. UseLess')
  },
  {
    name: 'useSass',
    handler: require('./CreateWebpackConfig/9. UseSass')
  },
  {
    name: 'useTypeScript',
    handler: require('./CreateWebpackConfig/10. useTypeScript')
  },
  {
    name: 'banner',
    handler: require('./CreateWebpackConfig/11. Banner')
  },
  {
    name: 'cleanOutputDirOptions',
    handler: require('./CreateWebpackConfig/12. CleanOutputDirOptions')
  },
  {
    name: 'resource',
    handler: require('./CreateWebpackConfig/13. Resource')
  }
];