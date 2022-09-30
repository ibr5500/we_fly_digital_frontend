import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { fetchCurrentUser } from '../redux/users/loginSlice';
import { fetchNewUser } from '../redux/users/registerSlice';

function SignUp() {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispach = useDispatch();

  const handleRegisterSubmit = (e) => {
    e.preventDefault(e);
    const newUser = {
      user: {
        fullname,
        username,
        email,
        password,
      },
    };

    dispach(fetchNewUser(newUser));

    // name.value = '';
    // setEmail.value = '';
    // setUsername.value = '';
    // setPassword.value = '';
  };

  // const handleLoginSubmit = (e) => {
  //   e.preventDefault(e);
  //   const currentUser = {
  //     username: usernameRef.current.value,
  //     password: passwordRef.current.value,
  //   };

  //   dispach(fetchCurrentUser(currentUser));
  // };

  return (
    <section>
      <h1>REGISTER</h1>
      <form onSubmit={handleRegisterSubmit} className="pl-5 ml-5">
        <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="FullName" />
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="UserName" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Register</button>
      </form>

      {/* <form onSubmit={handleLoginSubmit}>
        <input type="text" ref={usernameRef} placeholder="UserName" />
        <input type="text" ref={passwordRef} placeholder="Password" />
        <button type="submit">Login</button>
      </form> */}
    </section>
  );
}

export default SignUp;
