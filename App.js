import React, { useState, useRef } from 'react';
import './App.css';

export default function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      password
    };
    console.log(formData);
    
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='container'>
        <h3 className='text-center mt-2'>Registration Form</h3>
        <hr />
        <div className='field'>
          <label>Username</label>
          <input
            type="text"
            placeholder='Enter a Name'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <div className='field'>
          <label>Email</label>
          <input
            type="text"
            placeholder='Enter an Email'
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className='field'>
          <label>Password</label>
          <input
            type="password"
            placeholder='Enter a Password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button type="submit" className='btn btn-primary mt-3' style={{ width: "250px" }}>
          Register
        </button>
      </div>
    </form>
  );
}
