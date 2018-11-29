const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GetPostcssLoader = require('./GetPostcssLoader');
const GetVueStyleLoader = require('./GetVueStyleLoader');


module.exports = function( name, test, isCss ){

  return ( webpack, config ) => {

    // 没有使用 less / sass
    if( !isCss && !config[ 'use' + name ] ){
      return;
    }

    const commonUse = [
      GetVueStyleLoader( config ),
      `css-loader`,
      GetPostcssLoader( config ),
      `${ isCss ? '' : `${ name.toLowerCase() }-loader` }`
    ];

    commonUse.$deleteValue('');

    // 将 css 内置在 js 中
    if( config.builtInCss ){
      webpack.module.rules.push({
        test,
        use: commonUse.$add( 1, 'style-loader' )
      });
    }
    // 将 css 导出为文件
    else{
      const options = {
        fallback: 'style-loader',
        use: commonUse
      };

      webpack.module.rules.push({
        test,
        use: ExtractTextPlugin.extract( options )
      });
    }

  };
}