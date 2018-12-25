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
 * 获取处理 css 的
 */
function GetConfig( name, test ){
  return ( webpackConfig, config ) => {

    // 没有使用 less / sass
    if( name !== 'css' && !config[ 'use' + name ] ){
      return;
    }

    const commonUse = [
      'css-loader',
      GetPostcssLoader( config ),
      `${ name === 'css' ? '' : `${ name.toLowerCase() }-loader` }`
    ];

    commonUse.$deleteValue('');

    // CSS 内置在 JS 中时
    if( config.builtInCss ){
      webpackConfig.module.rules.push({
        test,
        use: commonUse.$add(
          commonUse.indexOf('css-loader'),
          GetStyleLoader( config )
        )
      });
    }
    // 将 CSS 导出为文件时
    else{
      webpackConfig.module.rules.push({
        test,
        use: ExtractTextPlugin.extract({
          fallback: GetStyleLoader( config ),
          use: commonUse
        })
      });
    }

  };
}



module.exports = function builtInCss( webpackConfig, config ){
  if( webpackConfig.isWebpack ){

    GetConfig( 'css', /\.css$/ )( webpackConfig, config );

    if( config.builtInCss ){
      delete config.Plugin_ExtractTextPluginOptions;
    }else{
      webpackConfig.plugins.push(
        new ExtractTextPlugin( config.Plugin_ExtractTextPluginOptions )
      );
    }

  }
}


module.exports.GetConfig = GetConfig;