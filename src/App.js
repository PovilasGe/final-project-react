import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesPage from './pages/CountriesPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div className='page-wrapper'>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/countries' element={<CountriesPage />} />
      </Routes>
    </div>
  );
}

export default App;