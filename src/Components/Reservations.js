import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reservations/reservations';

function Reservations() {
  const reserveInfo = useSelector((state) => state.reservations.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <section className="container reservation">
      <div className="mb-5 m-auto">
        <h1 className="text-center text-black font-black text-3xl">
          All Reservatoins
        </h1>
        <p className="text-center text-gray-500 font-semibold text-1xl">
          Travel the world with us
        </p>
      </div>
      <div className="details-reservation-container">
        <div className="reserve-item">
          <h4>Airline</h4>
          <h4>City</h4>
          <h4>Date</h4>
          <h4>Price</h4>
        </div>

        {reserveInfo.reservations ? (
          reserveInfo.reservations.map((item) => (
            <div className="reserve-item" key={item.reservation.id}>
              <p>{item.airline.name}</p>
              <p>{item.reservation.city}</p>
              <p>{item.reservation.date}</p>
              <p>{item.airline.price}</p>
            </div>
          ))
        ) : (
          <h2>You have no reservations!</h2>
        )}
      </div>
    </section>
  );
}

export default Reservations;
