const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GetPostcssLoader = require('./GetPostcssLoader');


module.exports = function( name, test ){

  const LowerName = name.toLowerCase();

  return ( NewWebpackConfig, config ) => {

    // 没有使用 less / sass
    if( !config[ 'use' + name ] ) return;

    // 将 css 内置在 js 中
    if( config.builtInCss ){
      const use = [
        'style-loader', 'css-loader', `${ LowerName }-loader`,
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
        'css-loader', `${ LowerName }-loader`,
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
  };
}