import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

function CountryDetails() {
  const [country, setCountry] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((err) => console.log(err));
  }, [country]);

  return (
    <div className="borderDetailList">
      {country ? (
        <>
          <img
            src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt=""
          />
          <h1>{country.name.common}</h1>
          <h3>Capital: {country.capital}</h3>
          <h3>Area: {country.area}km2</h3>
          <h3>Borders: </h3>
          <ul className="noBullets">
          {country.borders.map((el, index) => {
            return (
              <Link to={`/countriesDetails/${el}`}>
              <li>{el}</li>
              </Link>
             
              );
          })}
          </ul>
        </>
      ) :  <Spinner /> }
    </div>
  );
}

export default CountryDetails;
