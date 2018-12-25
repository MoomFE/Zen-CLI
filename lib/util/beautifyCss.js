
/**
 * 美化 CSS
 */
module.exports = function beautifyCss( css ){
  [
    [ /{/g, ' {\n  '  ],
    [ /}/g, '\n}\n\n' ],
    [ /(?<!base64),/g, ', '      ],
    [ /;(?!base64|charset)/g, ';\n  '   ],
    [ /  ([^:]+?):/g, '  $1: ' ],
    [ />/g, ' > ' ]
  ].forEach( value => {
    css = css.replace( value[0], value[1] );
  });

  return css.trim();
}