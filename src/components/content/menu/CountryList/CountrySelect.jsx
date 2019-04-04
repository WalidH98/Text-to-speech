import React from 'react';

import { countries } from './countriesData';


const Lists = () => (
    <div>
        <select name="country" id="country">
        {
            countries.map((country) => {
                return <option value={country.name}>{country.name}</option>    
            })
        }
        </select>
    </div>
)


export default Lists;