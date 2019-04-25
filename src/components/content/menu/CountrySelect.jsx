import React, { Component } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import './assets/css/countryselect.scss';

export default class CountrySelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: 'FR'
    };
  }
  render() {
    return (
      <div className='flag-menu container'>
        <h6 className="title-menu">Choisir la langue:</h6>
        <div className="d-flex flex-row"></div>
        <ReactFlagsSelect
          countries={['AD', 'CN', 'HK', 'TW', 'DK', 'NL', 'AU', 'GB', 'IN', 'US', 'FL', 'CA', 'FR', 'DE', 'IT', 'JP', 'KR', 'NO', 'PL', 'BR', 'PT', 'RU', 'MX', 'ES', 'SE']}
          customLabels={{'DE': 'Allemagne', 'GB': 'Anglais', 'AU': 'Australie', 'BR': 'Brésil', 'CA': 'Canada(FR)', 'AD': 'Catalan', 'CN': 'Chine', 'KR': 'Corée', 'DK': 'Danemark', 'ES': 'Espagne', 'US': 'États-Unis', 'FL': 'Finlande', 'FR': 'France', 'HK': 'Hong Kong', 'IN': 'Inde', 'IT': 'Italie', 'JP': 'Japon', 'MX': 'Mexique', 'NO': 'Norvège', 'NL': 'Pays-Bas', 'PL': 'Pologne', 'PT': 'Portugal' ,'RU': 'Russe' ,'SE': 'Suède' ,'TW': 'Taiwan' }}
          defaultCountry={this.state.selectedCountry}
          onSelect={(countryCode) => {
            this.props.buildRequest('language', `${countryCode.toLocaleLowerCase()}-${countryCode.toLocaleLowerCase()}`);
            this.props.buildTitle('title', `${countryCode.toLocaleLowerCase()}-${countryCode.toLocaleLowerCase()}`);
          }}
        />
      </div>
    );
  }
}