import React from 'react';
import { Link } from 'react-router-dom';

function Reservations() {
  const fetchData = () => {
    fetch('http://[::1]:3000/api/v1/users').then((resJson) => resJson.json()).then((data) => console.log(data));
  };

  return (
    <div>
      <h1>BOOK A FLIGHT DESTINATION</h1>
      <p>Travel the world with us</p>
      <button type="button" onClick={() => fetchData()}>Click me</button>
      <Link to="/reservationForm">Book Now</Link>

    </div>
  );
}

export default Reservations;
