

module.exports = {
  // 存放多个应用配置, 默认继承默认配置
  // 在实际场景中, 如果有此配置, 则 config 配置则视为当前项目的默认配置使用;
  //              如果无此配置, 则将 config 当做唯一配置使用;
  pipe: [
    
  ],
  // 应用默认配置
  config: {

    // 模式
    // [ 'production', true ] || [ 'development', false ]
    mode: 'development',

    // 入口文件地址 ( 必须使用完整文件路径 )
    // 单独打包一个文件时使用, 使用时将会忽略 [ 'entry', 'output' ] 配置项, 必须和 to 配套使用
    from: '',
    // 输出文件地址 ( 必须使用完整文件路径 )
    // 必须和 from 配套使用
    to: '',

    // 入口文件夹
    entry: 'src/',
    // 输出文件夹
    output: 'dist/',
    // 入口文件名
    entryFilename: 'index.js',
    // 输出文件名
    outputFilename: 'index.js', // index.[chunkhash].js'

    // 在打包好的文件的块的外部的最顶部插入的一段内容
    banner: null,
    // 在指定类型文件插入内容, 可为数组: [ /\.js|css$/, ... ]
    bannerOutputTypes: /\.js|css$/,
    // 插入的内容是否是注释, 如果为 true, 将自动添加段落注释, 否则将原样输出
    bannerIsComment: true,

    // 将代码内导入的 css 内置在 js 中
    // 否则将 css 导出为 css 文件
    builtInCss: true,
    // 插件 "extract-text-webpack-plugin" 的配置项
    // 需要关闭 builtInCss 配置项
    Plugin_ExtractTextPluginOptions: {
      filename: 'index.css',
      allChunks: true
    },

    // 是否清理输出文件夹
    cleanOutputDir: false,
    // 清理输出文件夹选项
    cleanOutputDirOptions: {
      // 清理输出文件夹所有内容
      // 此条目为真时, 此选项其它条目全部不生效
      cleanAll: true,
      // 清理输出文件夹内的文件
      cleanFile: true,
      // 清理输出文件夹内的文件夹
      cleanDir: false,
      // 只清理匹配的文件或文件夹, 可传入正则或字符串规则
      // 每条规则将会依次和文件或文件夹的文件名和完整路径进行比对
      // [ /\.js$/, 'index.css', ... ]
      cleanMatching: []
    },

    // 是否根据代码自动引入相应 polyfill
    autoPolyfill: true,

    // 输出文件时是否强制写入 ( 输出文件权限为只读时, 尝试强制解锁并写入 )
    forcedWrite: true,

    // 解析 Vue 单文件组件 ( .vue )
    useVue: false,

    // 解析 React 单文件组件 ( .jsx )
    useReact: false,

    // 事件回调
    on: {
      // webpack 配置文件创建完成后调用, 可对 webpack 配置进行修改
      // ConfigCreated( WebpackConfig, ZenConfig )
      ConfigCreated: null
    }

  }
}