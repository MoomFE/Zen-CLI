
module.exports = function babel( webpackConfig, config ){
  if( webpackConfig.isWebpack ){
    webpackConfig.module.rules.push( config.babelrc );
  }else{
    const babel = require('rollup-plugin-babel');

    webpackConfig.inputOptions.plugins.push(
      babel( config.babelrc.use.options )
    );
  }
}