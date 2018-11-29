const print = require('../util/PrintInfo');


let WebpackWatching;
function CreateWebpackWatching(){
  const CreateCompilers = require('../util/CreateCompilers/index');
  const compilers = CreateCompilers( false );

  WebpackWatching = compilers.watch( {}, ( error, stats ) => {
    if( error ){
      print.error( error.stack );
    }
  });
}

CreateWebpackWatching();


/* ------------------ Restart ------------------ */
const setTimeout = global.setTimeout.$args({ 1: 520 });
let TimeoutIndex;


const chokidar = require('chokidar');
const fileWatcher = chokidar.watch( global.userDir + '\\zen.config.js' );

fileWatcher.on( 'change', function( event, path ){

  if( TimeoutIndex ){
    clearTimeout( TimeoutIndex );
  }

  TimeoutIndex = setTimeout(function(){
    TimeoutIndex = undefined;

    if( WebpackWatching ){
      console.log('Zen-CLI Restarting ...\n');

      WebpackWatching.invalidate();
      WebpackWatching.close(() => {
        CreateWebpackWatching();
      });
      WebpackWatching = null;
    }
  });
  
});