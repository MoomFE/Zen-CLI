

module.exports = function( webpack, config ){
  if( config.cleanOutputDir ){
    let cleanMatching = config.cleanOutputDirOptions.cleanMatching;

    if( !ZenJS.isArray( cleanMatching ) ){
      cleanMatching = [ cleanMatching ];
    }

    cleanMatching = cleanMatching.filter( matching => {
      return ZenJS.isRegExp( matching ) || ZenJS.isString( matching );
    });

    cleanMatching = cleanMatching.map( matching => {
      return ZenJS.isRegExp( matching ) ? matching : RegExp.$parse( matching );
    });

    config.cleanOutputDirOptions.cleanMatching = cleanMatching;
  }else{
    delete config.cleanOutputDirOptions;
  }

}