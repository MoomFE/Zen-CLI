

module.exports = function( webpack, config ){
  const jsRule = webpack.module.rules[0];
  const babelEnv = jsRule.use.options.presets[0];

  babelEnv[1].targets = {
    browsers: config.browserslist
  };
}