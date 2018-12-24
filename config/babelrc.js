
module.exports = new Proxy({

  // 使用 babel 时的 babel 配置
  true: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        babelrc: false,
        presets: [
          [ '@babel/preset-env', {

          }]
        ],
        plugins: [
          '@babel/plugin-transform-runtime'
        ]
      }
    }
  },

  // 不使用 babel 时的 babel 配置
  false: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        babelrc: false,
        only: []
      }
    }
  }

}, {
  get( target, name ){
    if( name in target ){
      return Object.$assign( null, target[ name ] );
    }
  },
  set( target, name, value ){
    if( name in target ){
      target[ name ] = Object.$assign( null, value );
    }
  }
});