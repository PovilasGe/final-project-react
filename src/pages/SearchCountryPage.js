import axios from 'axios';
import React, { useState } from 'react'
import Country from '../components/Country/Country';
import './SearchCountryPage.css'

const SearchCountryPage = () => {
  
  const [country, setCountry] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [loadingFinished, setLoadingFinished] =useState(true);
  const getPageContent = () =>{
    if (!loadingFinished) {
      return (
        <div>
        <p className='return'>Loading...</p>
        </div>
      );
    }
    if (errorOccurred) {
      return (
        <div>
        <p className='return'>No country found 😞</p>
        </div>
      );
    }
    if (!!country) {
      return  <Country country={country}/>
    }
    return ''
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
        <label id='label' htmlFor='search-term-input'>Enter your country: </label>
        <input type='text' id='search' value={searchTerm} onChange={searchTermInputHandler} />
        <input type='submit' id='button' value='Search' />
      </form>

      {getPageContent()}
    </div>
  )
}

export default SearchCountryPage