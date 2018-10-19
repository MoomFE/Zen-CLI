#!/usr/bin/env node

const program = require('commander');

program
  .version( require( '../package' ).version )
  .usage( '<command> [options]' );

program
  .command('build')
  .action(( name, cmd ) => {
    console.log( name, cmd );
  });