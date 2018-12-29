const console = require('../lib/console');


module.exports = async function build(){
  const [ webpackCompilers, rollupConfigs ] = await require('./config')();

  if( webpackCompilers ){
    webpackCompilers.run(( error, stats ) => {
      if( error ){
        console.error( error.stack )
      }
    });
  }else{
    rollupConfigs.forEach( run => {
      run();
    });
  }
}

// 测试是否可以同时执行 rollup 和 webpack 的打包
// ( async () => {
//   const configs = await require('./config')();

//   configs.forEach( async config => {

//     // rollup
//     if( config.input ){
//       const rollup = require('rollup');
//       const watcher = await rollup.watch( config );
      
//       watcher.on( 'BUNDLE_END', () => {
//         console.log( 123 )
//       })
//     }
//     // webpack
//     else{
//       const compilers = require('webpack')([
//         config
//       ]);

//       compilers.watch( {}, ( error, stats ) => {
//         if( error ){
//           console.log( error.stack );
//         }
//       });
//     }

//   });
// })();