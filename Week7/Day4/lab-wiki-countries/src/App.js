import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            {/* <Route path="/" element={<CountriesList />} /> */}
            <CountriesList />
          </div>
          <div className="col">
            <Routes>
              <Route
                path="/countriesDetails/:id"
                element={<CountryDetails />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
