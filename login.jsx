import React from "react";
import "./login.css";

//------ icons------//
import { FaUserAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
//-----------//
import { GoogleLogin } from "@react-oauth/google";
import  FacebookLogin  from "react-facebook-login";
import GitHubLogin from 'react-github-login'; 
import axios from "axios";

export default function login() {
  const responseFacebook = async (response) => {
    if (response.accessToken) {
      try {
        const res = await axios.get(
          `https://graph.facebook.com/me?access_token=${response.accessToken}&fields=id,name,email,picture`
        );
        console.log("User Info:", res.data);
      } catch (err) {
        console.error("Failed to fetch user info", err);
      }
    } else {
      console.error("Facebook login failed", response);
    }
  };

  const responseGitHub = async (response) => {
    if (response.code) {
      try {
        const res = await axios.get(
          `https://api.github.com/user?access_token=${response.code}`
        );
        console.log("GitHub User Info:", res.data);
      } catch (err) {
        console.error("Failed to fetch GitHub user info", err);
      }
    } else {
      console.error("GitHub login failed", response);
    }
  };

  const onFailure = (error) => {
    console.error('GitHub login failed:', error);
  };

  return (
    <>
      <div className="login">
        <div className="input">
          <h3 className="text-center mt-3">Welcome</h3>
          <p className="text-center">
            Log into My Company inc. To continue to My Products App.
          </p>
          <div className="d-flex">
            <input type="text" placeholder="   Email-Address" />
            <p className="icon1 mt-4">
              <FaUserAlt />
            </p>
          </div>

          <div>
            <p className="icon2 mt-4">
              <FaEye />
            </p>
            <input type="password" placeholder="  Password" />
          </div>
        </div>

        <div className="button mt-3">
          <div className="remember">
            <input className="text-center mx-2" type="checkbox" />
            Remember Me
            <a href="https://www.youtube.com/" className="ms-5">
              Forgot Password?
            </a>
          </div>
          <button className="btn btn-primary mt-4">Sing in</button>
        </div>

        <div className="ms-4 mt-2">
          <p>
            Don't have an account <a href="#">Sign up</a>
          </p>
        </div>

        <div className="d-flex mt-1 ms-4">
          <hr className="hr" />
          <p className="ms-2 mx-2 mt-1">OR</p>
          <hr className="hr" />
        </div>

        <div className="buttonss">
          
          <div className="google">
            <GoogleLogin
              onSuccess={(credentialResponse) =>
                console.log(credentialResponse)
              }
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>

          {/* <div>
            <img src="img" alt="" />
            <p>Name:{name}</p>
            <p>price:{price}</p>
          </div> */}


          <div className="facebook" >
          <FacebookLogin
                  appId="1170198007355770" 
                  // autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  render={(renderProps) => (
                    <button className='FB-with-btn' onClick={renderProps.onClick} >Login with Facebook</button>
                  )}
                />
          </div>


          <div className="github">
            <GitHubLogin
                clientId="YOUR_GITHUB_CLIENT_ID"
                redirectUri="http://localhost:3000" 
                onSuccess={responseGitHub}
                onFailure={onFailure}
           >
            <button className="github-btn">Login with GitHub</button>
             </GitHubLogin>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}


