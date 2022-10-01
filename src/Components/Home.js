import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel/lib/carousel';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { fetchAirlines } from '../redux/airlines/airlines';

const Home = () => {
  const data = useSelector((state) => state.airlines.airlines);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchAirlines());
    // eslint-disable-next-line
   }, []);

  console.log(data);

  return (
    <section className="main">
      <div className="header">
        <h2>Flights list:</h2>
        <p>Please book a flight from the following list</p>
      </div>
      <div className="container">
        <Carousel
          wrapAround={1}
          slidesToShow={3}
          adaptiveHeight={1}
          dragging={0}
          defaultControlsConfig={{
            prevButtonText: <FaArrowAltCircleLeft className="icon" />,
            nextButtonText: <FaArrowAltCircleRight className="icon" />,
            pagingDotsStyle: {
              display: 'none',
            },
          }}
        />
        <div className="flights">
          {!(data.airlines) ? <p>There are no flight yet!!</p>
            : data.airlines.map((item) => (
              <Link key={item.id} to={`/flight/${item.id}`} className="link">
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
              </Link>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Home;
