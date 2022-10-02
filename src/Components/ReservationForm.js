import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addNewReservations } from '../redux/reservations/reservations';

function ReservationForm() {
  const airlineParams = useParams();
  const dispach = useDispatch();
  const [reservations, setReservations] = useState({
    city: 'airline',
    date: '',
    airline_id: airlineParams.id,
  });

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      reservation: { ...reservations },
    };
    dispach(addNewReservations(newReservation));

    setReservations({
      date: '',
    });
  };

  return (
    <section className="form-section bg-lime-500 ">
      <div className="overlay">
        <div className="form-signin">
          <div className="form-intro text-white text-center  p-1 my-2 ">
            <h2>Book Your Flight</h2>
            <hr className="px-2" />
          </div>

          <form onSubmit={handleReservationSubmit}>
            <div className="input-floor">
              <label htmlFor="name-input" className="w-100 my-2">
                <input
                  id="name-input"
                  className="form-control py-2  px-4 "
                  type="date"
                  value={reservations.date}
                  onChange={(e) => setReservations({ ...reservations, date: e.target.value })}
                />
              </label>
            </div>

            {/* <div className="input-floor">
              <label htmlFor="password-input" className="w-100 my-2">
                <input
                  id="password-input"
                  className="form-control py-2  px-4 "
                  type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                  placeholder="Password"
                />
              </label>
            </div> */}

            <div className="button-container w-50">
              <button type="submit" className="btn sign-up">
                Reserve
              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ReservationForm;