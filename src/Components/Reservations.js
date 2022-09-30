import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../redux/users/userSlice';

function Reservations() {
  const users = useSelector((state) => state.user.users.user);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchUsers());
  }, []);
  console.log(users);

  return (
    <div>
      <h1>BOOK A FLIGHT DESTINATION</h1>
      <p>Travel the world with us</p>
      { users && users.map((user) => <p key={user.id}>{user.username}</p>)}
      <Link to="/reservationForm">Book Now</Link>

    </div>
  );
}

export default Reservations;
