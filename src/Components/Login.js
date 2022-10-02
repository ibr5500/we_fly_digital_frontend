import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCurrentUser } from '../redux/users/registerSlice';

const Login = () => {
  const loginInfo = useSelector((state) => state.userInfo.login);
  // console.log(loginInfo);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const dispach = useDispatch();
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    e.preventDefault(e);
    if (!user.username || !user.password) alert('Fill up the form!');

    const currentUser = {
      user: { ...user },
    };
    dispach(fetchCurrentUser(currentUser));

    setUser({
      username: '',
      password: '',
    });
    if (!loginInfo.error) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
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
