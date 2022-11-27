import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryPage = () => {
  let params = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/alpha?codes=${params.countryId}`)
    .then(response => {setCountry(response.data[0])})
  }, [params.countryId]);

  return (
    <div>
      {!country ? <h1>Loading...</h1> : <><h1>{country.name.common}</h1><img src={country.flags.png}/>
      <pre>{JSON.stringify(country,undefined,2)}</pre></>}
    </div>
  )
}

export default CountryPage