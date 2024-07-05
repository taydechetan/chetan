import React, { useState } from 'react';
import "./App.css";

export default function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    if(user.length<6 || password.length < 6)
    {
      alert("pls enter a correct values")
    }
    else{
      alert("sucesss")
    }
    e.preventDefault();
  }

  const handleUser = (e) => {
    let item = e.target.value;
    if (item.length < 6) {
      setUserError(true);
    } else {
      setUserError(false);
    }
    setUser(item);
  }

  const handlePassword = (e) => {
    let item = e.target.value;
    if (item.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(item);
  }

  

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Form validation</h1>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder='Enter a username' onChange={handleUser} value={user} />
          {userError && <span className="error">at least 6 characters long</span>}
        </div>
        <br />

        <div>
          <label htmlFor="password">Enter a Password:</label>
          <input type="password" placeholder='Enter a Password' onChange={handlePassword} value={password} />
          {passwordError && <span className="error"> at least 6 characters long</span>}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>

      
    </>
  );
}
