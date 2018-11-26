const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = function( webpack, config ){
  if( config.useVue ){

    webpack.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader'
    });

    webpack.plugins.push(
      new VueLoaderPlugin()
    );

  }
}