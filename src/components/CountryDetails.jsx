import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  const countryId = props.match.params.countryId;

  const findCountry = (countryId) =>
    props.countries?.find((count) => count.cca3 === countryId) || {};

  const country = findCountry(countryId);

  return (
    <div className="col-7">
      <h1>{country.name && country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders?.map((bor) => (
                  <li>
                    <Link to={`${bor}`}>{findCountry(bor).name.common}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
