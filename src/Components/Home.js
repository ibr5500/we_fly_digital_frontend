import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAirlines } from '../redux/airlines/airlines';
import Airline from './Airline';

const Home = () => {
  const dataList = useSelector((state) => state.airlines.airlines.data);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchAirlines());
  }, [dispach]);

  return (
    <section className="main">
      <div className="header">
        <h2>Flights list:</h2>
        <p>Please book a flight from the following list</p>
      </div>
      <div className="container">
        <div className="flights">
          {!(dataList) ? <p>There are no flight yet!!</p>
            : dataList.map((item) => (
              <Airline
                key={item.id}
                id={item.id}
                image={item.image}
                airlineName={item.name}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
