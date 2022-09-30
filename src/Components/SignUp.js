import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNewUser } from '../redux/users/registerSlice';

function SignUp() {
  const [newuser, setNewuser] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
  });
  const dispach = useDispatch();

  const handleRegisterSubmit = (e) => {
    e.preventDefault(e);
    const user = {
      user: { ...newuser },
    };

    dispach(fetchNewUser(user));

    setNewuser({
      fullname: '',
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <section>
      <h1>REGISTER</h1>
      <form onSubmit={handleRegisterSubmit} className="pl-5 ml-5">
        <input type="text" value={newuser.fullname} onChange={(e) => setNewuser({ ...newuser, fullname: e.target.value })} placeholder="FullName" />
        <input type="text" value={newuser.username} onChange={(e) => setNewuser({ ...newuser, username: e.target.value })} placeholder="UserName" />
        <input type="email" value={newuser.email} onChange={(e) => setNewuser({ ...newuser, email: e.target.value })} placeholder="Email" />
        <input type="password" value={newuser.password} onChange={(e) => setNewuser({ ...newuser, password: e.target.value })} placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default SignUp;
