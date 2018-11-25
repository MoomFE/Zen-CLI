const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');


/**
 * 获取 Postcss 的配置
 */
module.exports = function GetPostcssLoader( config ){
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
  };;
}