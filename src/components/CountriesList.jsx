import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList({ countries }) {
  const listCountries = countries?.map(({ cca3, cca2, name }) => {
    return (
      <Link
        className="list-group-item list-group-item-action"
        to={cca3}
        key={cca3}
      >
        {`${cca2} ${name.common}`}
      </Link>
    );
  });

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">{listCountries}</div>
    </div>
  );
}
