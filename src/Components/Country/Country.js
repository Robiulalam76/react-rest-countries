import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, region, population, area, flags } = props.country
    // console.log(props.country)
    return (
        <div className='country'>
            <h1>{name.common}</h1>
            <img src={flags.png} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;