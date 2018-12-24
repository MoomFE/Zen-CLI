const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = function useVue( webpackConfig, config ){
  if( !config.useVue ) return;
  
  if( webpackConfig.isWebpack ){

    webpackConfig.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader'
    });

    webpackConfig.plugins.push(
      new VueLoaderPlugin()
    );

  }

}