const rollup = require('rollup');


module.exports = function( rollupConfigs ){
  return rollupConfigs.map( config => {

    // 当前使用了 build 命令
    if( isBuildCommand ){
      return async function(){
        const bundle = await rollup.rollup( config.inputOptions );
        bundle.write( config.outputOptions );
      };
    }

    // 使用了 watch 命令
    else{
      config = Object.$assign( null, config.inputOptions, {
        output: [
          config.outputOptions
        ]
      });

      return function(){
        return rollup.watch( config );
      }
    }

  });
}