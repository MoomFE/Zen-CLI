
module.exports = function useTypeScript( webpackConfig, config ){
  if( !config.useTypeScript ) return;
  
  if( webpackConfig.isWebpack ){
    const babel = Object.$assign( null, config.babelrc, {
      test: /\.ts$/
    });

    babel.use.options.presets.push(
      '@babel/preset-typescript'
    );

    webpackConfig.module.rules.push(
      babel
    );
  }

}