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

  LOG(){
    this.logStart();
    this.log.apply( this, arguments );
    this.logEnd();  
  },

  run( config ){
    const input = config.entry + '\\' + config.entryFilename;

    this.LOG(`Start   : ${ input.green }`)
  },

  done( webpackConfig, config, stats ){
    const isWebpack = webpackConfig.isWebpack;
    const options = isWebpack ? stats.toJson() : stats;

    const input = config.entry + '\\' + config.entryFilename;
    const output = options.outputPath + '\\';
    const date   = Date.$format( options.builtAt, 'YYYY-MM-DD HH:mm:ss Z' );
    const time   = options.time + 'ms';

    this.logStart();
    this.log(`Input   : ${ input.green }`);
    options.assets.$each(( options, index ) => {
      const file = isWebpack ? path.resolve( output, options.name ).green
                             : options.name.green;

      this.log(
        `${ index ? '      ' : 'Output' }  : ${ file } - ( ${ getSize( options.size ).green } )`,
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