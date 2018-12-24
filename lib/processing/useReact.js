
module.exports = function useReact( webpackConfig, config ){
  if( !config.useReact ) return;
  
  if( webpackConfig.isWebpack ){
    const babel = Object.$assign( null, config.babelrc.true, {
      test: /\.jsx$/
    });

    babel.use.options.presets.push(
      '@babel/preset-react'
    );

    webpackConfig.module.rules.push(
      babel
    );
  }

}