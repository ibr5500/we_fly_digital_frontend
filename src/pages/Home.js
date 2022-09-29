import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel/lib/carousel';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { fetchData } from '../redux/details/details';

const Home = () => {
  const details = useSelector((state) => state.details.data);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchData());
    // eslint-disable-next-line
  }, []);

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
        >
          { details && details.map((item) => (
            <div key={item.id} className="flights">
              <Link to="/details/:id" className="link">
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
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
