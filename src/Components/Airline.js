import React from 'react';
import { Link } from 'react-router-dom';

const Airline = ({
  id, image, airlineName, price,
}) => (
  <div>
    <Link key={id} to={`/flight/${id}`} className="link">
      <div className="img-container">
        <img src={image} alt={airlineName} />
      </div>
      <div className="contents">
        <h3>{airlineName}</h3>
        {' '}
        ................
        <h4>
          Price: $
          {price}
        </h4>
      </div>
    </Link>
  </div>
);

export default Airline;
