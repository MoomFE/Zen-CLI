const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = function( NewWebpackConfig, config ){
  if( config.useVue ){

    NewWebpackConfig.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader'
    });

    NewWebpackConfig.plugins.push(
      new VueLoaderPlugin()
    );

  }
}