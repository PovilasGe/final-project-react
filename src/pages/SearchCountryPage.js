import axios from 'axios';
import React, { useState } from 'react'
import Country from '../components/Country/Country';

const SearchCountryPage = () => {
  
  const [country, setCountry] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [loadingFinished, setLoadingFinished] =useState(true);
  const getPageContent = () =>{
    if (!loadingFinished) {
      return 'Loading...'
    }
    if (errorOccurred) {
      return 'No country found :('
    }
    if (!!country) {
      return  <Country country={country}/>
    }
    return 'Enter country'
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setErrorOccurred(false);
    setLoadingFinished(false);

    axios.get(`https://restcountries.com/v3.1/name/${searchTerm}`)
    .then(response => {setCountry(response.data[0])})
    .catch(error => {
      setCountry(undefined);
      setErrorOccurred(true);
    })
    .finally(() => {
      setLoadingFinished(true);
      
    })
    setSearchTerm('');
  }

  const searchTermInputHandler = event => setSearchTerm(event.target.value);

  return (
    <div className='main-content'>
      <h1 className='page-title'>Search Country Page</h1>

      <form onSubmit={submitHandler}>
        <label htmlFor='search-term-input'>Enter your country: </label>
        <input type='text' id='search-term-input' value={searchTerm} onChange={searchTermInputHandler} />
        <input type='submit' value='Search' />
      </form>

      {getPageContent()}
    </div>
  )
}

export default SearchCountryPage