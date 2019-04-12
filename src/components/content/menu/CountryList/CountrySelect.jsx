import React, { Component } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import './CountrySelect.css';

export default class CountrySelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCountry: 'FR'
		}
	}
	render() {
		return (
			<div className='flag-menu'>
				<h6>Choisir la langue:</h6>
				<ReactFlagsSelect
					countries={['AD', 'CN', 'HK', 'TW', 'DK', 'NL', 'AU', 'GB', 'IN', 'US', 'FL', 'CA', 'FR', 'DE', 'IT', 'JP', 'KR', 'NO', 'PL', 'BR', 'PT', 'RU', 'MX', 'ES', 'SE']}
					customLabels={{ 'AD': 'Catalan', 'CN': 'Chine', 'HK': 'Hong Kong', 'TW': 'Taiwan', 'DK': 'Danemark', 'NL': 'Pays-Bas', 'AU': 'Australie', 'GB': 'Anglais', 'IN': 'Inde', 'US': 'États-Unis', 'FL': 'Finlande', 'CA': 'Canada(FR)', 'FR': 'France', 'DE': 'Allemagne', 'IT': 'Italie', 'JP': 'Japon', 'KR': 'Corée', 'NO': 'Norvège', 'PL': 'Pologne', 'BR': 'Brésil', 'PT': 'Portugal', 'RU': 'Russe', 'MX': 'Mexique', 'ES': 'Espagne', 'SE': 'Suède' }}
					defaultCountry={this.state.selectedCountry}
					onSelect={(countryCode) => {
						this.props.updateAppState('langauge', `${countryCode.toLocaleLowerCase()}-${countryCode.toLocaleLowerCase()}`)
					}}
				/>
			</div>
		)
	}
}