
/**
 * 获取 Postcss 的配置
 */
module.exports = function GetPostcssLoader(){
  return {
    loader: 'postcss-loader',
    options: {
      plugins: [
        require('autoprefixer')
      ]
    }
  };
}