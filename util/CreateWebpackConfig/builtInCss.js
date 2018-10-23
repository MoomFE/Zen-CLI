const ExtractTextPlugin = require('extract-text-webpack-plugin');


const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [ require('autoprefixer') ]
  }
};

module.exports = function( NewWebpackConfig, config ){
  const options = {
    test: /\.css$/,
    use: [
      'style-loader', 'css-loader',
      postcssLoader
    ]
  };

  // 将 css 提取到文件
  if( !config.builtInCss ){

    options.use = ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        postcssLoader
      ]
    });

    NewWebpackConfig.plugins.push(
      new ExtractTextPlugin( config.Plugin_ExtractTextPluginOptions )
    );

  }

  NewWebpackConfig.module.rules.push( options );
}