
module.exports = function browserslist( webpackConfig, config ){
  if( config.babel && config.browserslist ){
    config.babelrc.use.options.presets[0][1].targets = {
      browsers: config.browserslist
    };
  }
}