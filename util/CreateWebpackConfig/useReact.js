

module.exports = function( NewWebpackConfig, config ){
  if( config.useReact ){

    const JS = NewWebpackConfig.module.rules[0];
    const JSX = Object.$assign( {}, JS, {
      test: /\.jsx$/
    });

    JSX.use.options.presets.push([ '@babel/preset-react' ]);

    NewWebpackConfig.module.rules.push( JSX );

  }
}