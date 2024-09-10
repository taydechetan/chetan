import React, { useState } from "react";
import "./account.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
// import { IoEyeOff } from "react-icons/io5";
import { FaEye ,FaEyeSlash} from "react-icons/fa";
// import { FaE } from "react-icons/fa6";


export default function Account() {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [username, setusername] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemails] = useState("");
  const [firstnameError, setuserfirstError] = useState("");
  const [lastnameerror, setlastnameerror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [phoneerror, setphoneerror] = useState("");
  const [showpassword, setshowpassword] = useState(false);
  const [name, setname] = useState('');
  const[setterror,settnameerror] =useState('');
  const [showSecondForm, setShowSecondForm] = useState(false);
  const[passto,setpassto] =useState('');
  const[topasserr,setpasserrto] =useState('');
  const[shpassworrd,setshpassword] = useState(false);
  const[shtopassword,shtosepassw] =useState(false)
  const navigate = useNavigate()


  const handlePhoneChange = (value, country) => {
    const countryCode = country.dialCode;
    const phoneNumber = value.slice(countryCode.length);
    setCountryCode(countryCode);
    setPhone(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setuserfirstError("");
    setlastnameerror("");
    setemailerror("");
    setphoneerror("");
  
    let hasError = false;
  
    if (username.trim() === "") {
      setuserfirstError("Please Enter a First Name");
      hasError = true;
    }

    if (lastname.trim() === "") {
      setlastnameerror("Please Enter a Last Name");
      hasError = true;
    }

    if (email.trim() === "") {
      setemailerror("Please Enter an Email");
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setemailerror("Please enter a valid Email");
        hasError = true;
      }
    }

    if (phone.trim() === "") {
      setphoneerror("Please Enter a Phone Number");
      hasError = true;
    }

    if (!hasError) {
      setshowpassword(true);
      setShowSecondForm(true);
    }
  };
  
  const passwordsubmit = (e) => {
    e.preventDefault();
    settnameerror("");
    setpasserrto("");
    // console.log(name);
    // console.log(passto);

    let hasError = false;

    if(name.trim() === ""){
      settnameerror("Please Enter a Password");
      hasError = true;
    }

    if(passto.trim() === ""){
      setpasserrto("Please Enter a Conform Password")
      hasError = true;
    }

    if (!hasError) {
      navigate("/home");
    }
  };

  const handelkey =() => {
    setshpassword(!shpassworrd);
  }

  const settopassw =() =>{
    shtosepassw(!shtopassword)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="images1 col-12 col-md-6">
              <img
                src="https://ir.ebaystatic.com/cr/v/c01/buyer_dweb_business.jpg"
                alt="img"
                className="images2 text-center"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </div>

            <div className="col-12 col-md-6">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <a href="/home">
                    <img
                      // src="https://www.shutterstock.com/image-vector/google-logo-editorial-vector-symbol-260nw-2317648589.jpg"
                      alt="img"
                      className="mt-4"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height:"100px",
                        width:"200px"
                      }}
                    />
                  </a> */}
                </div>

                {!showSecondForm ? (
                  <form onSubmit={handleSubmit}>
                    <p className="createacc fs-3 ms-5">Create an account</p>

                    <div className="accounts">
                      <div>
                        <input
                          type="text"
                          placeholder="First Name"
                          className="custom-input form-control "
                          value={username}
                          onChange={(e) => setusername(e.target.value)}
                        />
                      </div>
                      <span>{firstnameError && <p className="error-message ms-5">{firstnameError}</p>}</span>
                      <div>
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="form-control custom-input"
                          value={lastname}
                          onChange={(e) => setlastname(e.target.value)}
                        />
                      </div>
                      <span>{lastnameerror && <p className="error-message ms-5">{lastnameerror}</p>}</span>

                      <div>
                        <input
                          type="text"
                          placeholder="Email Address"
                          className="custom-input form-control"
                          value={email}
                          onChange={(e) => setemails(e.target.value)}
                        />
                      </div>
                      <span>{emailerror && <p className="error-message ms-5">{emailerror}</p>}</span>

                      <div className="input" style={{ width: "90%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <PhoneInput
                          country={"in"}
                          name="mobile_number"
                          value={`${countryCode}${phone}`}
                          onChange={(value, country) =>
                            handlePhoneChange(value, country)
                          }
                          inputProps={{
                            name: "country_code",
                            required: true,
                            autoFocus: true,
                          }}
                          containerStyle={{ width: "100%" }}
                          inputStyle={{
                            width: "100%",
                            paddingLeft: "50px",
                            fontSize: "16px",
                            height: "55px",
                          }}
                        />
                      </div>
                      <span>{phoneerror && <p className="error-message ms-5">{phoneerror}</p>}</span>

                      <button
                        type="submit"
                        className="btn btn-primary fw-bold"
                        style={{ width: "90%" }}
                      >
                        NEXT
                      </button>
                    </div>
                    <hr />

                    <div>
                      <p
                        className="already"
                        style={{ fontFamily: "monospace" }}
                      >
                        Already have an account?{" "}
                        <Link to='/signup'>
                          <a href="#" className="ms-2">
                            Sign in
                          </a>
                        </Link>
                      </p>
                    </div>
                  </form>
                ) : (
                  <form className='formm-second shadow bg-white rounded' onSubmit={passwordsubmit}>
                    <div className='container-second'>
                      <div className="second-form row">
                        <div className="text-center">
                          <a href="/home">
                          <img
                          src="data:image/png;base64,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"
                          alt="img"
                          className="mt-4 ms-5"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        />
                          </a>
                        </div>

                        <div className='col ms-5'>
                          <p className='fs-2 mt-2'>Create an account</p>
                          <p className="text-primary"><FaArrowLeft /><a href="./account" style={{ textDecoration: "none" }}>Back</a></p>
                        </div>

                        <div className='call-text d-flex'>
                          <input type={shtopassword ? 'text' : 'password'} className="input-ft form-control custom-input" placeholder='Password' value={name} onChange={(e) => setname(e.target.value)} />
                          <p className="icon mt-2" onClick={settopassw}>
                            { shtopassword ? <FaEye /> : <FaEyeSlash/> }
                            {/* <IoEyeOff /> */}
                          </p>
                        </div>
                        <span className="text-danger text-center">
                          {setterror && <p className="error-message ms-5">{setterror}</p>}
                        </span>

                        <div className="call-text mt-3 d-flex">
                          <input  type={shpassworrd ? 'text' : 'password'} className="input-ft form-control custom-input" value={passto} onChange={(e)=> setpassto(e.target.value)} placeholder="Confirm Password" style={{ borderRadius: '5px' }} />
                          <p className="icon mt-2" onClick={handelkey}>
                             {shpassworrd ? <FaEye /> : <FaEyeSlash />}
                            {/* <IoEyeOff /> */}
                          </p>
                        </div>
                        <span>{topasserr && <p className="error-message ms-5">{topasserr}</p>}</span>

                        <button type="submit" className="account-btn btn btn-primary fw-bold mt-4">Submit</button>
                       
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
