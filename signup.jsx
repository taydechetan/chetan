import React, { useState } from 'react';
import './signup.css';
import { FaUserAlt, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === '') {
      setUsernameError('Please enter a username.');
      return;
    }

    if (password.trim() === '') {
      setPasswordError('Please enter a password.');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!])[A-Za-z\d@#$!]{8,}$/;
    if(password.length < 8){
      setPasswordError('password must be at least 8 character')
      return;
    }
    else if (!passwordRegex.test(password)) {
      setPasswordError('Password  use special charecter & Alphabet');
      return;
    }
   

    setUsernameError('');
    setPasswordError('');

    navigate('/atoz', { state: { username, password, usernameError, passwordError } });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setPasswordError('');
    }
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

        <span className='text-danger'>
        {usernameError && <p className="error-message">{usernameError}</p>}
        </span>

        <div className="d-flex">
          <input
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={handlePasswordChange}
          />
          <p className="icon2 mt-4">
            <FaEye />
          </p>
        </div>
        <span className='text-danger'>
         {passwordError && <p className="error-message">{passwordError}</p>}
        </span>
      </div>

      <div className="button mt-1">
        <div className="remember">
          <input className="text-center mx-2" type="checkbox" />
          <span className='text-success'>Remember Me</span>
          <a href="https://www.youtube.com/" className="ms-3">
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Sign up
        </button>
      </div>
      <span className="text-center text-info mt-2 mx-5">
        If an error occurs when filling out the form, a message will show here
      </span>
    </form>
  );
};

export default Signup;
