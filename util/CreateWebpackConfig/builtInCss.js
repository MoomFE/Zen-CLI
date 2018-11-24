const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GetPostcssLoader = require('./util/GetPostcssLoader');


module.exports = function( NewWebpackConfig, config ){
  const test = /\.css$/;

  // 将 css 内置在 js 中
  if( config.builtInCss ){
    const use = [
      'style-loader', 'css-loader',
      GetPostcssLoader()
    ];

    if( config.useVue ){
      use.unshift('vue-style-loader');
    }

    return NewWebpackConfig.module.rules.push({ test, use });
  }

  const options = {
    fallback: 'style-loader',
    use: [
      'css-loader',
      GetPostcssLoader()
    ]
  };

  if( config.useVue ){
    options.use.unshift('vue-style-loader');
  }

  NewWebpackConfig.module.rules.push({
    test,
    use: ExtractTextPlugin.extract( options )
  });

  NewWebpackConfig.plugins.push(
    new ExtractTextPlugin( config.Plugin_ExtractTextPluginOptions )
  );
}