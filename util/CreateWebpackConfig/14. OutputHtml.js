const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function( webpack, config ){
  if( config.outputHtml ){
    webpack.plugins.push(
      new htmlWebpackPlugin( config.outputHtmlOptions )
    );
  }
}