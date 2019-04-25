module.exports = {
  convertTitle: (title) => {
    switch (title) {
    case 'de-de':
      return 'Sprachsynthesedienst';
    case 'fl-fl':
      return 'Äänen synteesipalvelu';
    case 'nl-nl':
      return 'Spraaksyntheseservice';
    case'it-it':
      return'Servizio di sintesi vocale';
    case 'pl-pl':
      return 'Usługa syntezy głosu';
    case 'ru-ru':
      return 'Cлужба синтеза голоса';
    case'fr-fr':
      return'Service de synthèse vocale';
    case'pt-pt':
      return 'Serviço de síntese de voz';
    case'es-es':
      return 'Servicio de síntesis de voz';  
    case 'ad-ad':
      return 'Servei de síntesi de veu';
    case 'cn-cn':
      return '語音合成服務';
    case 'hk-hk':
      return '語音合成服務';
    case 'tw-tw':
      return '語音合成服務';
    case 'dk-dk':
      return 'Voice synthesis service';
    case 'au-au':
      return 'Voice synthesis service';
    case 'gb-gb':
      return 'Voice synthesis service';
    case 'in-in':
      return 'आवाज संश्लेषण सेवा';
    case 'us-us':
      return 'Voice synthesis service';
    case 'ca-ca':
      return 'Service de synthèse vocale';
    case 'jp-jp':
      return '音声合成サービス';
    case 'kr-kr':
      return '음성 합성 서비스';
    case 'no-no':
      return 'Stemme syntese tjeneste';
    case 'br-br':
      return 'Serviço de síntese de voz';
    case 'mx-mx':
      return 'servicio de síntesis de voz';
    case 'se-se':
      return 'Röstsynteservice';
    default:
      return title;
    }
  } 
};