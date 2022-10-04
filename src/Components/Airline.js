import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Airline = ({
  id, image, airlineName, price,
}) => (
  <div>
    <Link key={id} to={`/airline/${id}`} className="link">
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
