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

/* ------ Private ------ */
program
  .command('private-build')
  .action(( name, cmd ) => {
    global.isPrivateCommand = true;
    require('../scripts/build');
  });

program
  .command('private-watch')
  .action(( name, cmd ) => {
    global.isPrivateCommand = true;
    require('../scripts/watch');
  });
/* ------ Private ------ */

program.on('--help', () => {
  console.log('');
});

program.parse( process.argv );