const console = require('../lib/console');


let webpackWatching;
let rullupWatching;

const watch = module.exports = async function(){
  const [ webpackCompilers, rollupConfigs ] = await require('./config')();

  if( webpackCompilers ){
    webpackWatching = webpackCompilers.watch( {}, ( error, stats ) => {
      if( error ){
        console.error( error.stack )
      }
    });
  }
  
  if( rollupConfigs ){
    rullupWatching = rollupConfigs.map( watch => {
      return watch();
    });
  }
}


/* ------------------ Restart ------------------ */
const setTimeout = global.setTimeout.$args({ 1: 520 });
let TimeoutIndex;

const chokidar = require('chokidar');
const fileWatcher = chokidar.watch(`${ runCommandPath }\\zen.config.js`);


fileWatcher.on( 'change', function(){

  if( TimeoutIndex ){
    clearTimeout( TimeoutIndex );
  }

  TimeoutIndex = setTimeout(() => {
    TimeoutIndex = undefined;

    const promises = [];

    if( webpackWatching ){
      webpackWatching.invalidate();
      promises.push(
        new Promise( resolve => {
          webpackWatching.close( resolve )
        })
      );
    }

    if( rullupWatching ){
      promises.push(
        new Promise( resolve => {
          rullupWatching.forEach( watcher => {
            watcher.close();
          });
          resolve();
        })
      );
    }

    webpackWatching = null;
    rullupWatching = null;

    Promise.all( promises ).then(() => {
      console.LOG('Zen-CLI Restarting ...');
      watch();
    });

  });

});