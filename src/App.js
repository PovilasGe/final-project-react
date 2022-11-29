import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesPage from './pages/CountriesPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation/Navigation';
import CountryPage from './pages/CountryPage';
import SearchCountryPage from './pages/SearchCountryPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='page-wrapper'>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/countries' element={<CountriesPage />} />
        <Route path='/countries/:countryId' element={<CountryPage />} />
        <Route path='/search' element={<SearchCountryPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;