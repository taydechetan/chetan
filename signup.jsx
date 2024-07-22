import React, { useState } from 'react';
import './signup.css';
import { FaUserAlt, FaEye } from 'react-icons/fa';
// import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    setUsername('');
    setPassword('');
    // history.push('/atoz');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="main mt-3">
        <p className="text-center fw-bold fs-2">Sign up</p>
        <div className="d-flex">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="icon1 mt-4">
            <FaUserAlt />
          </p>
        </div>

        <div className="d-flex">
          <input
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="icon2 mt-4">
            <FaEye />
          </p>
        </div>
      </div>

      <div className="button mt-1">
        <div className="remember">
          <input className="text-center mx-2" type="checkbox" />
          <span>Remember Me</span>
          <a href="https://www.youtube.com/" className="ms-3">
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Sign up
        </button>
      </div>
      <span className="text-center mt-2 mx-5">
        If an error occurs when filling out the form, a message will show here
      </span>
    </form>
  );
};

export default Signup;
