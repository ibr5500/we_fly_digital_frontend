import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { postRegister } from '../redux/users/registerSlice';

function User() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const fullnameRef = useRef();
  const dispach = useDispatch();

  const handleRegisterSubmit = () => {
    const newUser = {
      user: {
        fullname: fullnameRef.current.value,
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    };

    dispach(postRegister(newUser));
  };

  return (
    <section>
      <h1>REGISTER</h1>
      <form>
        <input type="text" ref={fullnameRef} placeholder="FullName" />
        <input type="text" ref={usernameRef} placeholder="UserName" />
        <input type="text" ref={emailRef} placeholder="Email" />
        <input type="text" ref={passwordRef} placeholder="Password" />
        <a href="/" onClick={handleRegisterSubmit}>Register</a>
      </form>
    </section>
  );
}

export default User;
