import React from 'react';

import { countries } from './countriesData';


const lists = () => (
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


export default lists;