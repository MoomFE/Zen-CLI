

module.exports = function( webpack, config ){

  // 输出 css 时
  if( config.to && /\.css$/.test( config.to ) ){
    config.builtInCss = false;
    config.Plugin_ExtractTextPluginOptions.filename = webpack.output.filename;
  }

}