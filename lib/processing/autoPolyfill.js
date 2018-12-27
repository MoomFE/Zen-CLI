
module.exports = function autoPolyfill( webpackConfig, config ){
  if( config.babel && !config.userBabelrc && config.autoPolyfill ){
    config.babelrc.use.options.presets[0][1].useBuiltIns = 'usage';
  }
}