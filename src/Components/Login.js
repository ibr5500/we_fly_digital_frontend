import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redux/users/loginSlice';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const dispach = useDispatch();

  const handleUserLogin = (e) => {
    e.preventDefault(e);
    const currentUser = {
      user: { ...user },
    };

    dispach(fetchCurrentUser(currentUser));

    setUser({
      username: '',
      password: '',
    });
  };

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={handleUserLogin}>
        <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder="UserName" />
        <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;
