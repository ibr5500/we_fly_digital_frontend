import React from 'react';
import { useSelector } from 'react-redux';

function Reservations() {
  const reservationsInfo = useSelector((state) => state.reservations.reservations)
  const airlineInfo = useSelector((state) => state.airlines.airlines)
  return (
    <section>
      <h1>All Reservatoins</h1>
      <p>Travel the world with us</p>
      { reservationsInfo && reservationsInfo.map((reservation) => (
        <div>
          <p>{reservation.city}</p>
          <p>{reservation.date}</p>
        </div>
      ))}

    </section>
  );
}

export default Reservations;
