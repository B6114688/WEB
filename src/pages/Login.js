import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { pathToFileURL } from 'url';
//import React, { FC, useState, useEffect}  from 'react';
import './Login.css';
//import { Link as RouterLink } from 'react-router-dom';
//import Home from './Home';
//import Home from './pages/Home';
//const [path, setPath] = React.useState("");

const shoot = () => {
 
}

export default function Login() {
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit" onClick={shoot}>
            Login
            
          </button>
        </div>
      </form>
    </div>
  )
}