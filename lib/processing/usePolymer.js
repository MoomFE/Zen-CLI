
module.exports = function usePolymer( webpackConfig, config ){
  if( config.babel && config.usePolymer ){
    config.babelrc.include = /node_modules\/(lit-html|@polymer)\/.*/;
  }
}