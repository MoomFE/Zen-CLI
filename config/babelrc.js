
module.exports = {

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

};