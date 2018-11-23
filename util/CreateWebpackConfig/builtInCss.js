const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GetPostcssLoader = require('./util/GetPostcssLoader');

module.exports = function( NewWebpackConfig, config ){

  // 将 css 内置在 js 中
  if( config.builtInCss ){
    return NewWebpackConfig.module.rules.push(
      GetRule( config )
    );
  }

  NewWebpackConfig.plugins.push(
    new ExtractTextPlugin( config.Plugin_ExtractTextPluginOptions )
  );

  NewWebpackConfig.module.rules.push(
    GetRule2( config )
  );
}




function GetRule( config ){
  const rule = {
    test: /\.css$/,
    use: [
      'style-loader', 'css-loader', GetPostcssLoader()
    ]
  };

  if( config.useVue ){
    rule.use.unshift('vue-style-loader');
  }

  return rule;
}

function GetRule2( config ){
  const options = {
    fallback: 'style-loader',
    use: [
      'css-loader', GetPostcssLoader()
    ]
  };

  if( config.useVue ){
    options.use.unshift('vue-style-loader');
  }

  return {
    test: /\.css$/,
    use: ExtractTextPlugin.extract( options )
  };
}