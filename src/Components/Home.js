/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'nuka-carousel/lib/carousel';
// import AliceCarousel from 'react-alice-carousel';
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { fetchAirlines } from '../redux/airlines/airlines';
import Airline from './Airline';

const Home = () => {
  const dataList = useSelector((state) => state.airlines.airlines.data);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchAirlines());
  }, [dispach]);

  // function reloadPage() {
  //  // The last "domLoading" Time //
  //  const currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
  //  // Current Time //
  //  const now = Date.now();
  //  // Ten Seconds //
  //  const tenSec = 10 * 1000;
  //  // Plus Ten Seconds //
  //  const plusTenSec = currentDocumentTimestamp + tenSec;
  //  if (now > plusTenSec) {
  //    // eslint-disable-next-line
  //    location.reload();
  //  }
  // }

  // reloadPage();

  return (
    <section className="main">
      <div className="header">
        <h2>Flights list:</h2>
        <p>Please book a flight from the following list</p>
      </div>
      <div className="container">
        <Carousel>
        {/* <div className="carousel"> */}
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
        {/* </div> */}
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
