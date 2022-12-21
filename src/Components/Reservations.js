import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reservations/reservations';

function Reservations() {
  const reserveInfo = useSelector((state) => state.reservations.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!reserveInfo.reservations) dispatch(fetchReservations());
  });

  return (
    <section className="container reservation">
      <div className="mb-5 m-auto">
        <h1 className="text-center text-black font-black text-3xl">All Reservatoins</h1>
        <p className="text-center text-gray-500 font-semibold text-1xl">Travel the world with us</p>
      </div>
      <div className="details-reservation-container table-responsive">
        <table className="table">
          <thead>
            <tr className="reserve-item">
              <th scope="col">
                <h4>Airline</h4>
              </th>
              <th scope="col">
                <h4>City</h4>
              </th>
              <th scope="col">
                <h4>Date</h4>
              </th>
              <th scope="col">
                <h4>Price</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {reserveInfo.reservations ? (
              reserveInfo.reservations.map((item) => (
                <tr
                  className="reserve-item"
                  key={item.reservation.id}
                >
                  <th scope="row">
                    <p>{item.airline.name}</p>
                  </th>
                  <td>
                    <p>{item.reservation.city}</p>
                  </td>

                  <td>
                    <p>{item.reservation.date}</p>
                  </td>

                  <td>
                    <p>{item.airline.price}</p>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <h2>You have no reservations!</h2>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Reservations;
