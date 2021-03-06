const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');


/**
 * 获取 style 的配置
 */
function GetStyleLoader( config ){
  // 使用了 vue         非直出 css 文件时
  if( config.useVue && !/\.css$/.test( config.outputFilename ) ){
    return 'vue-style-loader';
  }
  return 'style-loader';
}

/**
 * 获取 postcss 的配置
 */
function GetPostcssLoader( config ){
  return {
    loader: 'postcss-loader',
    options: {
      plugins: [
        autoprefixer({
          browsers: config.browserslist
        }),
        cssnano()
      ]
    }
  };
}

/**
 * 获取 CommonUse
 */
function GetCommonUse( _name, config ){
  const name = _name.toLowerCase();
  const commonUse = [
    'css-loader',
    GetPostcssLoader( config ),
    `${ name === 'css' ? '' : `${ name.toLowerCase() }-loader` }`
  ];

  return commonUse.$deleteValue('');
}

module.exports = ( name, test ) => ( webpackConfig, config ) => {
  if( name === 'css' || config[ 'use' + name ] ){
    const commonUse = GetCommonUse( name, config );

    webpackConfig.module.rules.push({
      test,
      oneOf: [

        // CSS 视为字符串时
        {
          resourceQuery: /toString/,
          use: [ 'to-string-loader' ].concat(
            commonUse
          )
        },

        {
          use: config.builtInCss
            // CSS 内置在 JS 中时
            ? [].concat(
                GetStyleLoader( config ),
                commonUse
              )
            // 将 CSS 导出为文件时
            : ExtractTextPlugin.extract({
                fallback: GetStyleLoader( config ),
                use: Array.$copy( commonUse )
              })
        }

      ]
    });

  }
};