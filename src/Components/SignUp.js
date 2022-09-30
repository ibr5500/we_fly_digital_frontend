import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redux/users/loginSlice';
import { fetchNewUser } from '../redux/users/registerSlice';

function SignUp() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const fullnameRef = useRef();
  const dispach = useDispatch();

  const handleRegisterSubmit = (e) => {
    e.preventDefault(e);
    const newUser = {
      user: {
        fullname: fullnameRef.current.value,
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    };

    dispach(fetchNewUser(newUser));

    fullnameRef.current.value = '';
    emailRef.current.value = '';
    usernameRef.current.value = '';
    passwordRef.current.value = '';
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault(e);
    const currentUser = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    dispach(fetchCurrentUser(currentUser));
  };

  return (
    <section>
      <h1>REGISTER</h1>
      <form onSubmit={handleRegisterSubmit} className="pl-5 ml-5">
        <input type="text" ref={fullnameRef} placeholder="FullName" />
        <input type="text" ref={usernameRef} placeholder="UserName" />
        <input type="text" ref={emailRef} placeholder="Email" />
        <input type="text" ref={passwordRef} placeholder="Password" />
        <button type="submit">Register</button>
      </form>

      <form onSubmit={handleLoginSubmit}>
        <input type="text" ref={usernameRef} placeholder="UserName" />
        <input type="text" ref={passwordRef} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default SignUp;
