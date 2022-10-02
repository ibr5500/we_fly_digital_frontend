import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
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
          <button type="button">Book now</button>
        </div>
      ))}
    </div>
  );
};

export default Details;
