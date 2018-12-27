require('@moomfe/zenjs');
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

  // 如果没有自定义 babel 配置, 则克隆一份默认配置
  if( config.babelrc ){
    ZenJS.defineValue( config, 'userBabelrc', true );
  }else{
    config.babelrc = Object.$assign(
      null,
      require('../../config/babelrc')
    );
  }

  // 当前配置需要使用 babel 进行转义
  if( config.babel ){
    Object.$assign( config.babelrc.use.options, {
      presets: [
        [ '@babel/preset-env', {} ]
      ],
      plugins: [
        '@babel/plugin-transform-runtime'
      ]
    });
  }
}