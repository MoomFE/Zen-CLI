const rollup = require('rollup');


module.exports = function( rollupConfigs ){
  return rollupConfigs.map( rollupConfig => {
    const config = rollupConfig[ 'Zen-CLI-Config' ];
    const rollupProcessing = config[ 'Rollup-Processing' ];

    
    rollupConfig = Object.$assign( null, rollupConfig.inputOptions, {
      output: [
        rollupConfig.outputOptions
      ]
    });

    return function(){
      const watcher = rollup.watch( rollupConfig );

      if( rollupProcessing && rollupProcessing.length ){
        rollupProcessing.forEach( processing => {
          processing( watcher );
        });
      }

      // 当前使用了 build 命令
      // 运行完成则退出
      if( isBuildCommand ){
        watcher.on( 'event', event => {
          [ 'END', 'ERROR', 'FATAL' ].includes( event.code ) && watcher.close();
        });
      }

      return watcher;
    };

  });
}