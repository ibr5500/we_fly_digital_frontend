import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const airline = useParams();
  const dataList = useSelector((state) => state.airlines.airlines.data);
  const airlineDetails = dataList.filter(
    (flight) => +flight.id === +airline.id,
  );
  console.log(airlineDetails);

  return (
    <div className="container my-5
     ">
      {airlineDetails.map((item) => (
        <div className="details-container" key={item.id}>
          <div className="img-container">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="contents p-5">
            <div>
              <p>Name: </p>
              <h3>{item.name}</h3>
            </div>

            <div className="my-2">
              <p>Price: $</p>
              {' '}
              <h4>{item.price}</h4>
            </div>
            <button className="btn book-btn my-2" type="button">
              Book now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
