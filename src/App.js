import React, { Component } from 'react';
import './App.css';
import CountrySelect from './components/content/menu/CountryList/CountrySelect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      textAreaValue: ''
    }
  }

  updateAppState(field, value) {
    if (field === 'language') {
      switch (value) {
        case 'ad-ad':
          value = 'ca-es';
          break;
        case 'cn-cn':
          value = 'zh-cn';
          break;
        case 'hk-hk':
          value = 'zh-hk';
          break;
        case 'tw-tw':
          value = 'zh-tw';
          break;
        case 'dk-dk':
          value = 'da-dk';
          break;
        case 'au-au':
          value = 'en-au';
          break;
        case 'gb-gb':
          value = 'en-gb';
          break;
        case 'in-in':
          value = 'en-in';
          break;
        case 'us-us':
          value = 'en-us';
          break;
        case 'ca-ca':
          value = 'fr-ca';
          break;
        case 'jp-jp':
          value = 'ja-jp';
          break;
        case 'kr-kr':
          value = 'ko-kr';
          break;
        case 'no-no':
          value = 'nb-no';
          break;
        case 'br-br':
          value = 'pt-br';
          break;
        case 'mx-mx':
          value = 'es-mx';
          break;
        case 'se-se':
          value = 'sv-se';
        default:
          value = value;

      }
    }
    this.setState({ [field]: value })
  }

  render() {
    return (
      <div className='App'>

        <CountrySelect
          updateAppState={(field, value) => this.updateAppState(field, value)} />
      </div>
    );
  }
}

export default App;