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
    <section>
      <h1>All Reservatoins</h1>
      <p>Travel the world with us</p>
      { reserveInfo.reservations
        ? reserveInfo.reservations.map((item) => (
          <div key={item.reservation.id}>
            <p>{item.reservation.city}</p>
            <p>{item.reservation.date}</p>
            <p>{item.airline.name}</p>
            <p>{item.airline.price}</p>
          </div>
        ))
        : <h2>You have no reservations!</h2>}

    </section>
  );
}

export default Reservations;
