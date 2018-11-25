

module.exports = function( NewWebpackConfig, config ){

  const babel = NewWebpackConfig.module.rules[0].use.options.presets[0];

  babel[1].targets.browsers = config.browserslist;

}