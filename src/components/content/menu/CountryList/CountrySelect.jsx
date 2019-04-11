import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import "./CountrySelect.css"




const Lists = () => (
    <div className="flag-menu">
    <h6>Choisir la langue:</h6>
<ReactFlagsSelect
    countries={["AD", "CN", "HK", "TW", "DK", "NL", "AU", "GB", "IN", "US", "FL", "CA", "CA", "FR", "DE", "IT", "JP", "KR", "NO", "PL", "BR", "PT", "RU", "MX", "ES", "SE"]}
    customLabels={{"AD": "Catalan", "CN": "Chine", "HK": "Hong Kong", "TW": "Taiwan", "DK": "Danemark", "NL": "Pays-Bas", "AU": "Australie", "GB": "Anglais", "IN": "inde", "US": "États-Unis", "FL": "Finlande", "CA": "Canada(FR)", "CA": "Canada(EN)", "FR": "France","DE": "Allemagne", "IT": "Italie", "JP": "Japon", "KR": "Corée", "NO": "Norvège", "PL": "Pologne", "BR": "Brésil", "PT": "Portugal", "RU": "Russe", "MX": "Mexique", "ES": "Espagne", "SE": "Suède"}}
    defaultCountry="FR"  />   
    
    </div>
    )


export default Lists;
