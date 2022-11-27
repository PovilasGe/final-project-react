import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Country from '../components/Country/Country';

const CountryPage = () => {
  let params = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/alpha?codes=${params.countryId}`)
    .then(response => {setCountry(response.data[0])})
  }, [params.countryId]);

  return (
    <div>
      {!country ? <h1>Loading...</h1> :  <Country country={country}/>}
    </div>
  )
}

export default CountryPage