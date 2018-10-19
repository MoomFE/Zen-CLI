#!/usr/bin/env node

const program = require('commander');

program
  .version(
    require( '../package.json' ).version,
    '-v, --version'
  );

program
  .command('build')
  .action(( name, cmd ) => {
    require('../scripts/build');
  });

program
  .command('watch')
  .action(( name, cmd ) => {
    require('../scripts/watch');
  });

program.on('--help', () => {
  console.log('');
});

program.parse( process.argv );