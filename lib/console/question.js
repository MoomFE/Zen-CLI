

module.exports = function question( message, resolve, reject ){

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(( resolve, reject ) => {
    readline.question( message, answer => {
      readline.close();

      switch( answer.trim().toLowerCase() ){
        case 'y': return resolve();
        case 'n': return reject();
        default: question( message, resolve, reject );
      }
    });
  })
  .then( resolve )
  .catch( reject );
}