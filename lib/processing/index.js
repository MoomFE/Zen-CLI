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

  }else{

    // 单入口打包模式
    if( config.from ){
      webpackConfig.inputOptions.input = config.from;
    }
    // 自动搜寻打包模式
    else{
      webpackConfig.inputOptions.input = path.resolve( config.entry, config.entryFilename );
    }

    webpackConfig.outputOptions.file = path.resolve( config.output, config.outputFilename );

  }

}


/**
 * 初始化 babel 配置
 */
function initBabel( config ){
  const babelrc = require('../../config/babelrc');

  // 当前配置使用 babel
  // 且用户使用了自定义 babelrc
  if( config.babel && config.babelrc ){
    // 表示用户是自定义的 babelrc
    // 初始化 [ "autoPolyfill", "browserslist" ] 配置需要使用
    ZenJS.defineGet( config, 'userBabelrc', ZenJS.returnTrue );

    // 继承用户 babelrc 配置
    config.babelrc = Object.$assign(
      null, babelrc,{
        use: { options: config.babelrc }
      }
    );
  }
  // 不使用 babel 将使用默认空配置
  else{
    config.babelrc = Object.$assign( null, babelrc );
  }

  // 当前配置使用 babel
  // 且用户未配置自定义 babelrc
  if( config.babel && !config.userBabelrc ){
    Object.$assign( config.babelrc.use.options, {
      presets: [
        [ '@babel/preset-env', {} ]
      ],
      plugins: [
        '@babel/plugin-transform-runtime'
      ]
    });

    if( !config.isWebpack ){
      config.babelrc.use.options.runtimeHelpers = true;
    }
  }
}