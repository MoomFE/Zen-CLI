const config = require('./config');

config.forEach( config => {
  config.watch();
});