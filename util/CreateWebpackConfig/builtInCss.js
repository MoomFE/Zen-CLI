const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function( NewWebpackConfig, config ){
  const options = {
    test: /\.css$/,
    use: [
      'style-loader', 'css-loader',
      GetPostcssLoader()
    ]
  };

  // Vue 相关
  if( config.useVue ){
    options.use.unshift('vue-style-loader');
  }

  // 将 css 提取到文件
  if( !config.builtInCss ){

    const use = {
      fallback: 'style-loader',
      use: [
        'css-loader',
        GetPostcssLoader()
      ]
    };

    // Vue 相关
    if( config.useVue ){
      use.use.unshift('vue-style-loader');
    }

    options.use = ExtractTextPlugin.extract( use );

    NewWebpackConfig.plugins.push(
      new ExtractTextPlugin( config.Plugin_ExtractTextPluginOptions )
    );

  }

  NewWebpackConfig.module.rules.push( options );
}


function GetPostcssLoader(){
  return {
    loader: 'postcss-loader',
    options: {
      plugins: [ require('autoprefixer') ]
    }
  };
}