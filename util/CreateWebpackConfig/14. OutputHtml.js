const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = function( webpack, config ){
  if( config.outputHtml ){

    const { outputHtmlOptions } = config;

    if( outputHtmlOptions && outputHtmlOptions.filename ){
      path.resolve( global.userDir, outputHtmlOptions.filename );
    }

    webpack.plugins.push(
      new htmlWebpackPlugin( outputHtmlOptions )
    );

  }
}