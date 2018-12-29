
module.exports = function format( webpackConfig, config ){
  if( webpackConfig.isWebpack ){
    if( config.format ){
      webpackConfig.output.libraryTarget = config.format;
    }
    if( config.name ){
      webpackConfig.output.library = config.name;
    }
  }else{
    if( config.format ){
      webpackConfig.outputOptions.format = config.format;
    }
    if( config.name ){
      webpackConfig.outputOptions.name = config.name;
    }
  }
}