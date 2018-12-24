const babelrc = require('../../config/babelrc');


module.exports = function useBabel( webpackConfig, config ){

  if( webpackConfig.isWebpack ){
    webpackConfig.module.rules.push(
      babelrc[ !!config.useBabel ]
    );
  }

}