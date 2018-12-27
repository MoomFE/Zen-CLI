const console = require('../lib/console');
const path = require('path');


let webpackWatching;

const watch = module.exports = async function(){
  const [ webpackCompilers, rollupConfigs ] = await require('./config')();

  if( webpackCompilers ){
    webpackWatching = webpackCompilers.watch( {}, ( error, stats ) => {
      if( error ){
        console.error( error.stack )
      }
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

    if( webpackWatching ){
      webpackWatching.invalidate();
      webpackWatching.close(() => {
        console.LOG('Zen-CLI Restarting ...');
        watch();
      });
      webpackWatching = null;
    }
  });

});