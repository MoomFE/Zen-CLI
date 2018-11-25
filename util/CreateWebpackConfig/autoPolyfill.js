
module.exports = function( NewWebpackConfig, config ){
  if( config.autoPolyfill ){

    const babel = NewWebpackConfig.module.rules[0].use.options.presets[0];

    babel[1].useBuiltIns = 'usage';

  }
}