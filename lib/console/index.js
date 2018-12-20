require('colors');
require('@moomfe/zenjs');
const package = require('../../package.json');


const zenInfo = `Zen-CLI v${ package.version }`;
const hr = '------------------------------------';
const hr2 = `${ hr }\n`;


module.exports = {

  log( ...args ){
    args.forEach( message => {
      console.log( `- ${ message }` );
    });
  },

  logStart(){
    console.log( zenInfo );
    console.log( hr );
    this.log.apply( this, arguments );
  },

  logEnd(){
    this.log.apply( this, arguments );
    console.log( hr2 );
  }

};