
module.exports = function( NewWebpackConfig, config ){
  if( config.autoPolyfill ){
    NewWebpackConfig.module.rules[0].use.options.presets[0].push({ useBuiltIns: 'usage' });
  }
}