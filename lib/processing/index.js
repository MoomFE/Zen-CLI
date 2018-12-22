const path = require('path');


module.exports = function processing( webpackConfig, config ){

  if( webpackConfig.isWebpack ){

    // 单入口打包模式
    if( config.from ){
      webpackConfig.entry = config.from;
    }
    // 自动搜寻打包模式
    else{
      webpackConfig.entry = path.resolve( config.entry, config.entryFilename );
    }

    webpackConfig.output.path = config.output;
    webpackConfig.output.filename = config.outputFilename;

    console.log(
      webpackConfig
    )
  }

}