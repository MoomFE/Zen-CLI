const console = require('../lib/console');


let webpackWatching;
let rollupWatching;

module.exports = async function watch(){
  const [ webpackCompilers, rollupConfigs ] = await require('./config')();

  if( webpackCompilers ){
    webpackWatching = webpackCompilers.watch( {}, ( error, stats ) => {
      if( error ){
        console.error( error.stack )
      }
    });
  }
}