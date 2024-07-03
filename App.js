import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

export default function App() {
    const [values, setValues] = useState({
        fullname: '',
        username: '',
        email: '',
        number: '',
        gender: '',
        subject: '',
        about: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', values)
            .then(response => {
                console.log(response.data);
                alert('Form submitted successfully!');
                setValues({
                    fullname: '',
                    username: '',
                    email: '',
                    number: '',
                    gender: '',
                    subject: '',
                    about: ''
                });
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error submitting form. Please try again.');
            });
    };

    
    const handleReset = () => {
        setValues({
            fullname: '',
            username: '',
            email: '',
            number: '',
            gender: '',
            subject: '',
            about: ''
        });
    };

    return (
        <>
            <div className='container'>
                <h3>Form in React</h3>
                <form action="form" className='form' onSubmit={handleSubmit}>
                    <label className='fw-bold' htmlFor="fullname">Full Name</label>
                    <input type="text" name="fullname" placeholder='Enter a name'
                        value={values.fullname} onChange={handleChange} required />

                    <label className='fw-bold' htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder='Username'
                        value={values.username} onChange={handleChange} required />

                    <label className='fw-bold' htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder='Enter an Email'
                        value={values.email} onChange={handleChange} required />

                    <label className='fw-bold' htmlFor="number">Number</label>
                    <input type="text" name="number" placeholder='Enter a conform number'
                        value={values.number} onChange={handleChange} />

                    <label className='fw-bold' htmlFor="gender">Gender:</label>
                    <div className="gender">
                        <input className='ms-3' type="radio" name="gender" value="male" onChange={handleChange} /> Male
                        <input className='ms-3' type="radio" name="gender" value="female" onChange={handleChange} /> Female
                        <input className='ms-3' type="radio" name="gender" value="other" onChange={handleChange} /> Other
                    </div>

                    <label htmlFor="about">About</label>
                    <textarea name="about" id="about" cols="20" rows="5" placeholder='Enter description'
                        value={values.about} onChange={handleChange}></textarea>

                    <label htmlFor="subject">Subject</label>
                    <select name="subject" id="subject" value={values.subject} onChange={handleChange}>
                        <option value="math">Math</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                    </select>

                    <div className="btn mt-2">
                        <button className='btn btn-primary' type='submit'>Register</button>
                        <button className='btn btn-success ms-5' type='button' onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        </>
    );
}
