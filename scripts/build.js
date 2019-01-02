const console = require('../lib/console');


module.exports = async function build(){
  const [ webpackCompilers, rollupConfigs ] = await require('./config')();

  if( webpackCompilers ){
    webpackCompilers.run(( error, stats ) => {
      if( error ){
        console.error( error.stack )
      }
    });
  }

  if( rollupConfigs ){
    rollupConfigs.map( run => {
      run();
    });
  }
}