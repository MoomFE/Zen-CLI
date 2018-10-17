const DefaultZenConfig = require('./zen.config').config;


module.exports = {

  mode: DefaultZenConfig.mode,

  entry: {

  },

  output: {
    filename: DefaultZenConfig.output.filename
  }

};