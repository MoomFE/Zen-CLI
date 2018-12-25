const console = require('../console');


module.exports = function forcedWrite( webpackConfig, config ){

  if( webpackConfig.isWebpack ){
    config['Webpack-Processing'].push( compiler => {
      
      compiler.hooks[ isBuildCommand ? 'run' : 'watchRun' ].tap( 'print', () => {
        console.run( config );
      });

      compiler.hooks.done.tap( 'print', stats => {

        if( stats.hasErrors() ){
          return console.error(
            stats.toJson().errors.join('\n')
          );
        }

        console.done( webpackConfig, config, stats );

      });

    });
  }

}