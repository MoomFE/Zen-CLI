require('colors');
require('@moomfe/zenjs');
const package = require('../../package.json');
const getSize = require('../util/getSize');
const path = require('path');


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
  },

  run( config ){
    const input = config.entry + '\\' + config.entryFilename;

    this.logStart();
    this.log(`Start   : ${ input.green }`)
    this.logEnd();
  },

  done( webpackConfig, config, stats ){
    const options = stats.toJson();

    const input = config.entry + '\\' + config.entryFilename;
    const output = options.outputPath + '\\';
    const date   = Date.$format( options.builtAt, 'YYYY-MM-DD HH:mm:ss Z' );
    const time   = options.time + 'ms';

    this.logStart();
    this.log(`Input   : ${ input.green }`);
    options.assets.$each(( options, index ) => {
      this.log(
        `${ index ? '      ' : 'Output' }  : ${ path.resolve( output, options.name ).green } - ( ${ getSize( options.size ).green } )`,
      );
    });
    this.log(`Built at: ${ date.green }`);
    this.log(`Mode    : ${ config.mode.green }`);
    this.log(`Time    : ${ time.green }`);
    this.logEnd();
  },

  error( error ){
    console.log( error.red );
    console.log( '\n' );
  }

};