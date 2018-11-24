const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GetPostcssLoader = require('./GetPostcssLoader');


module.exports = function( name, test, isCss ){

  const LowerName = name.toLowerCase();

  return ( NewWebpackConfig, config ) => {

    if( !isCss ){
      // 没有使用 less / sass
      if( !config[ 'use' + name ] ) return;
    }

    // 将 css 内置在 js 中
    if( config.builtInCss ){
      const use = [
        'style-loader', 'css-loader',
        isCss ? '' : `${ LowerName }-loader`,
        GetPostcssLoader(),
        config.useVue ? 'vue-style-loader' : ''
      ].$deleteValue('');;

      return NewWebpackConfig.module.rules.push({ test, use });
    }

    const options = {
      fallback: 'style-loader',
      use: [
        'css-loader',
        isCss ? '' : `${ LowerName }-loader`,
        GetPostcssLoader(),
        config.useVue ? 'vue-style-loader' : ''
      ].$deleteValue('')
    };

    NewWebpackConfig.module.rules.push({
      test,
      use: ExtractTextPlugin.extract( options )
    });

    if( isCss ){
      NewWebpackConfig.plugins.push(
        new ExtractTextPlugin( config.Plugin_ExtractTextPluginOptions )
      );
    }
  };
}