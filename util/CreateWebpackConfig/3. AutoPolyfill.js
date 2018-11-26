
module.exports = function( webpack, config ){
  if( config.autoPolyfill ){
    const jsRule = webpack.module.rules[0];
    const babelEnv = jsRule.use.options.presets[0];

    babelEnv[1] = {
      useBuiltIns: 'usage'
    };
  }
}