const CreateCompilers = require('../util/CreateCompilers/index');
const print = require('../util/PrintInfo');

const compilers = CreateCompilers( false );


compilers.watch( {}, ( error, stats ) => {
  if( error ){
    print.error( error.stack );
  }
});