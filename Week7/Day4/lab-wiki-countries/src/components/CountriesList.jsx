import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';

function CountriesList() {
  const [countries, setCountries] = useState([]);
  const { alpha3Code } = useParams();

  //Spinner
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data);
        setLoaded(!loaded);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Coutries List</h2>
      
      {loaded ? countries.map((el) => {
        return (
       
          <div className="backgroundColorWi">
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`}
              alt="flag4"
            />
               <Link to={`/countriesDetails/${el.alpha3Code}`}>
            <h5>{el.name.official}</h5>
            </Link>
          </div>
         
        );
      }) : <Spinner />}
    </div>
  );
}

export default CountriesList;
