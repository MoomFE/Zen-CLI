require('@moomfe/zenjs');


const config = module.exports = {

  entry: {},
  output: {
    pathinfo: false
  },

  module: {
    
  },

  plugins: []

};


ZenJS.defineGet( config, 'isWebpack', ZenJS.returnTrue );