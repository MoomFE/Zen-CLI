const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = function outputHtml( webpackConfig, config ){

  if( webpackConfig.isWebpack && config.outputHtml ){
    const { outputHtmlOptions } = config;

    if( outputHtmlOptions && outputHtmlOptions.filename ){
      outputHtmlOptions.filename = path.resolve( global.runCommandPath, outputHtmlOptions.filename );
    }

    webpackConfig.plugins.push(
      new htmlWebpackPlugin( outputHtmlOptions )
    );
  }

}