import React from 'react';

export const CountryBox = (props) => {
    return(
        <div className='countrybox'>
            <img src={props.country.flag} className='countryboxFlag'/>
            <div className='countryboxName'>{props.country.name}</div>
            <div className='countryboxRegion'>{props.country.region}</div>
        </div>
    )
}
export default CountryBox;