import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const AirlineDetails = () => {
  const airline = useParams();
  const dataList = useSelector((state) => state.airlines.airlines.data);
  const airlineDetails = dataList.filter((flight) => +flight.id === +airline.id);

  return (
    <div>
      {airlineDetails.map((item) => (
        <div key={item.id}>
          <div className="img-container">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="contents">
            <h3>{item.name}</h3>
            {' '}
            ................
            <h4>
              Price: $
              {item.price}
            </h4>
          </div>
          <Link to={`/reservationForm/${item.id}`}>Book now</Link>
        </div>
      ))}
    </div>
  );
};

export default AirlineDetails;
