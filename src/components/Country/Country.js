import React from 'react';

const Country = ({ country }) => {
 
  return (
    <><h1>{country.name.common}</h1>
    <img src={country.flags.png}/></>
  )
}

export default Country