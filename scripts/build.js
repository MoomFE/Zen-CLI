const config = require('./config');

config.forEach( config => {
  config.run();
});