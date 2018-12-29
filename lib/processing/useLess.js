const createCssRule = require('../util/createCssRule')( 'Less', /\.less$/ );


module.exports = function useLess( webpackConfig, config ) {
  if( webpackConfig.isWebpack ){
    createCssRule( webpackConfig, config );
  }
};