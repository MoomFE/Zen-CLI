const createCssRule = require('../util/createCssRule')( 'css', /\.css$/ );


module.exports = function builtInCss( webpackConfig, config ){
  if( webpackConfig.isWebpack ){

    createCssRule( webpackConfig, config );

    if( config.builtInCss ){
      delete config.Plugin_ExtractTextPluginOptions;
    }else{
      webpackConfig.plugins.push(
        new ExtractTextPlugin( config.Plugin_ExtractTextPluginOptions )
      );
    }

  }
}