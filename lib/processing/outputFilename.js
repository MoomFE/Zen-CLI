
module.exports = function outputFilename( webpackConfig, config ){

  if( webpackConfig.isWebpack ){
    if( /\.css$/.test( config.outputFilename ) ){
      config.builtInCss = false;
      config.Plugin_ExtractTextPluginOptions.filename = config.outputFilename;
    }
  }

}