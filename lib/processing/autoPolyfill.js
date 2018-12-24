const babelrc = require('../../config/babelrc');


module.exports = function autoPolyfill( webpackConfig, config ){

  config.babelrc = Object.$assign( null, babelrc );

  if( config.autoPolyfill ){
    const babel = config.babelrc.true;
    const babelEnv = babel.use.options.presets[0];

    babelEnv[1].useBuiltIns = 'usage';
  }

}