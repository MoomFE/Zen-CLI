const webpack = require('webpack');


module.exports = function( webpackConfigs ){
  const compilers = webpack( webpackConfigs );

  compilers.compilers.forEach(( compiler, index ) => {
    const config = webpackConfigs[ index ][ 'Zen-CLI-Config' ];
    const webpackProcessing = config[ 'Webpack-Processing' ];

    if( webpackProcessing && webpackProcessing.length ){
      webpackProcessing.forEach( processing => {
        processing( compiler );
      });
    }
  });

  return compilers;
}