const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function( NewWebpackConfig, config ){
  const rules = NewWebpackConfig.module.rules;

  // 将 css 内置在 js 中
  if( config.builtInCss ){
    return rules.push(
      GetRule( config )
    );
  }

  NewWebpackConfig.plugins.push(
    new ExtractTextPlugin( config.Plugin_ExtractTextPluginOptions )
  );

  rules.push(
    GetRule2( config )
  );
}


function GetPostcssLoader(){
  return {
    loader: 'postcss-loader',
    plugins: {
      plugins: [
        require('autoprefixer')
      ]
    }
  };
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

  return ExtractTextPlugin.extract( options );
}