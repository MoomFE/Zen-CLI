const path = require('path');


module.exports = function processing( webpackConfig, config ){

  initBabel( config );

  if( webpackConfig.isWebpack ){

    // 单入口打包模式
    if( config.from ){
      webpackConfig.entry.index = config.from;
    }
    // 自动搜寻打包模式
    else{
      webpackConfig.entry.index = path.resolve( config.entry, config.entryFilename );
    }

    webpackConfig.output.path = config.output;
    webpackConfig.output.filename = config.outputFilename;

  }

}


/**
 * 初始化 babel 配置
 */
function initBabel( config ){
  /**
   * 克隆的当前配置使用的 babel 配置
   */
  const babelrc = config.babelrc = Object.$assign(
    null,
    require('../../config/babelrc')
  );

  // 当前配置需要使用 babel 进行转义
  if( config.babel ){
    Object.$assign( babelrc.use.options, {
      presets: [
        [ '@babel/preset-env', {} ]
      ],
      plugins: [
        '@babel/plugin-transform-runtime'
      ]
    });
  }
}