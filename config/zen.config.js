

module.exports = {
  pipe: [
    
  ],
  config: {

    mode: 'development',

    from: '',
    to: '',

    entry: 'src/',
    output: 'dist/',
    entryFilename: 'index.js',
    outputFilename: 'index.js',

    banner: '',
    bannerOutputTypes: /\.js|css$/,
    bannerIsComment: true,

    builtInCss: true,
    Plugin_ExtractTextPluginOptions: {
      filename: 'index.css',
      allChunks: true
    },

    cleanOutputDir: false,
    cleanOutputDirOptions: {
      cleanAll: true,
      cleanFile: true,
      cleanDir: false,
      cleanMatching: []
    },

    browserslist: [ 'last 1 versions' ],

    autoPolyfill: true,

    forcedWrite: true,

    useVue: false,

    useReact: false,

    useLess: false,

    useSass: false,

    on: {
      ConfigCreated: null
    }

  }
}