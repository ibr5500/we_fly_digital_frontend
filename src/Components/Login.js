import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchCurrentUser } from '../redux/users/registerSlice';

const Login = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleUserLogin = (e) => {
    e.preventDefault(e);

    const currentUser = {
      user: { ...user },
    };
    dispach(fetchCurrentUser(currentUser));

    if (user.username && user.password) {
      setTimeout(() => {
        navigate('/home');
        window.location.reload(false);
      }, 1000);
    } else {
      alert('Username or Password cannot be empty !!');
      return;
    }
    setUser({
      username: '',
      password: '',
    });
  };

  return (
    <section className="form-section bg-lime-500 ">
      <div className="overlay">
        <div className="form-signin">
          <div className="form-intro text-white text-center  p-1 my-2 ">
            <h2>Login</h2>
            <hr className="px-2" />
          </div>

          <form onSubmit={handleUserLogin}>
            <div className="input-floor">
              <label htmlFor="name-input" className="w-100 my-2">
                <input
                  id="name-input"
                  className="form-control py-2  px-4 "
                  type="text"
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  placeholder="UserName"
                />
              </label>
            </div>

            <div className="input-floor">
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
            </div>

            <div className="button-container w-50">
              <button type="submit" className="btn sign-up">
                Login
              </button>
              <Link to="/signup" className="btn log-in my-2">
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
