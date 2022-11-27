import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesPage from './pages/CountriesPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation/Navigation';
import CountryPage from './pages/CountryPage';


function App() {
  return (
    <div className='page-wrapper'>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/countries' element={<CountriesPage />} />
        <Route path='/countries/:countryId' element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;