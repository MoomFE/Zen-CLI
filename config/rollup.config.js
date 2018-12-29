const resolve = require('rollup-plugin-node-resolve');


module.exports = {

  inputOptions: {
    input: '',
    plugins: [
      resolve()
    ]
  },

  outputOptions: {
    file: '',
    format: 'umd'
  }

}