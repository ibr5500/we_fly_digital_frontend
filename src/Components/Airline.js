import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Airline({
  id, image, airlineName, price,
}) {
  return (
    <div className="card mb-3 details-container">
      <Link key={id} to={`/airline/${id}`} className="link">
        <div className="img-container">
          <img src={image} alt={airlineName} />
        </div>
        <div className="cancelled-flights contents">
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
}

Airline.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  airlineName: PropTypes.string,
  price: PropTypes.number,
};

Airline.defaultProps = {
  id: null,
  image: null,
  airlineName: null,
  price: null,
};

export default Airline;
