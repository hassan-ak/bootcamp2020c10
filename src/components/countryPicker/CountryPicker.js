import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import './CountryPicker.css'

export const CountryPicker = (props) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    // useEffect Hooks to use fetch Data
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            setFetchedCountries(data.Countries.map(country=>country.Slug));
        }
        fetchData();
    },[setFetchedCountries]);

    function capitalize_Words(str)
    {
     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    return (
        <FormControl className = "FormControl">
            <NativeSelect defaultValue="" onChange={(e)=>props.receiveValue(e.target.value)}>
                <option value = "global">Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value = {country}>{capitalize_Words(country.replaceAll('-',' '))}</option>)}
            </NativeSelect>
        </FormControl>    
    )
}
