const CreateCompilers = require('../util/CreateCompilers/index');
const print = require('../util/PrintInfo');

const compilers = CreateCompilers( true );


compilers.run(( error, stats ) => {
  if( error ){
    print.error( error.stack );
  }
});