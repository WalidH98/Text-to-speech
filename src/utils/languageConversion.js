module.exports = {
  convertIsoCode: (isoCode) => {
    switch (isoCode) {
    case 'fl-fl':
      return'fi-fi';
    case 'ad-ad':
      return 'ca-es';
    case 'cn-cn':
      return 'zh-cn';
    case 'hk-hk':
      return 'zh-hk';
    case 'tw-tw':
      return 'zh-tw';
    case 'dk-dk':
      return 'da-dk';
    case 'au-au':
      return 'en-au';
    case 'gb-gb':
      return 'en-gb';
    case 'in-in':
      return 'en-in';
    case 'us-us':
      return 'en-us';
    case 'ca-ca':
      return 'fr-ca';
    case 'jp-jp':
      return 'ja-jp';
    case 'kr-kr':
      return 'ko-kr';
    case 'no-no':
      return 'nb-no';
    case 'br-br':
      return 'pt-br';
    case 'mx-mx':
      return 'es-mx';
    case 'se-se':
      return 'sv-se';
    default:
      return isoCode;
    }
  }
};