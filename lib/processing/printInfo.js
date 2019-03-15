const console = require('../console');
const outputFile = require('../util/outputFile');


module.exports = function forcedWrite( webpackConfig, config ){

  if( webpackConfig.isWebpack ){
    config['Webpack-Processing'].push( compiler => {
      
      // 打包开始
      compiler.hooks[ isBuildCommand ? 'run' : 'watchRun' ].tap( 'print', () => {
        console.run( config );
      });

      // 打包完成 / 打包错误
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
  else{
    config[ 'Rollup-Processing' ].push(( watcher ) => {
      
      // 打包开始
      watcher.on( 'event', event => {
        if( event.code === 'START' ) console.run( config );
      });

      // 打包错误
      watcher.on( 'event', event => {
        if( [ 'FATAL', 'ERROR' ].includes( event.code ) ){
          console.log( JSON.stringify( event ) )
          return console.error(
            `Error: ${ event.error.id } at line: ${ event.error.loc.line }, column: ${ event.error.loc.column }\n` +
            `  code: ${ event.error.code }\n` +
            `  plugin: ${ event.error.plugin } ${ event.error.hook }\n` +
            `  pluginCode: ${ event.error.pluginCode }\n`
          );
        }
      });

      // 打包完成
      watcher.on( 'event', function( event ){
        if( event.code === 'BUNDLE_END' ){
          const fs = require('fs-extra');
          const zlib = require('zlib');

          console.done( webpackConfig, config, {
            builtAt: new Date(),
            time: event.duration,
            assets: event.output.map( output => {
              let fileToString = fs.readFileSync( output ).toString();

              if( config.banner ){
                outputFile(
                  output,
                  fileToString = config.banner + fileToString
                );
              }

              return {
                name: output,
                size: fileToString.length,
                gzipSize: zlib.gzipSync( fileToString ).length
              };
            })
          });
        }
      });

    });
  }

}