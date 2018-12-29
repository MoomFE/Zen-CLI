const createCssRule = require('../util/createCssRule')( 'Sass', /\.s[ac]ss$/ );


module.exports = function useSass( webpackConfig, config ) {
  if( webpackConfig.isWebpack ){
    createCssRule( webpackConfig, config );
  }
};