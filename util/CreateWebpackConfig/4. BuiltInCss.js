const ExtractTextPlugin = require('extract-text-webpack-plugin');
const handler = require('./util/GetProcessing')( 'css', /\.css$/, true );


module.exports = function( webpack, config ){

  handler( webpack, config );

  if( config.builtInCss ){
    delete config.Plugin_ExtractTextPluginOptions;
  }else{
    webpack.plugins.push(
      new ExtractTextPlugin( config.Plugin_ExtractTextPluginOptions )
    );
  }

};