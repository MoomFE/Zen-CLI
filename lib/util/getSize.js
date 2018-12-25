const B = 1024;
const KB = B * B;
const MB = KB * B;
const GB = MB * B;
const TB = GB * B;
const PB = TB * B;
const EB = PB * B;

module.exports = function getSize( size ){
  if( size < B ){
    return size + 'B';
  }
  else if( size < KB ){
    return ( size / B ).toFixed( 2 ) + 'KB';
  }
  else if( size < MB ){
    return ( size / KB ).toFixed( 2 ) + 'MB';
  }
  else if( size < GB ){
    return ( size / MB ).toFixed( 2 ) + 'GB';
  }
  else if( size < TB ){
    return ( size / GB ).toFixed( 2 ) + 'TB';
  }
  else if( size < PB ){
    return ( size / TB ).toFixed( 2 ) + 'PB';
  }
  else if( size < EB ){
    return ( size / PB ).toFixed( 2 ) + 'EB';
  }
  else{
    return ( size / EB ).toFixed( 2 ) + 'ZB';
  }
}