import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./CountriesPage.css"

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => setCountries(response.data))
  }, []);

  return (
    <div className= 'wrapper'>
      <h1>COUNTRIES LIST:</h1>
      {countries && (
        <ul>
          {countries.map((country, index) => <li key={index}><Link to={'/countries/' + country.cca2}>{country.name.common}</Link></li>)}
        </ul>
      )}
    </div>
  )
}

export default CountriesPage