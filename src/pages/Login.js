import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { pathToFileURL } from 'url';
//import React, { FC, useState, useEffect}  from 'react';
import './Login.css';
import { Link as RouterLink } from 'react-router-dom';
//import Home from './Home';
//import Home from './pages/Home';
//const [path, setPath] = React.useState("");
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  where
} from "firebase/firestore";
import { Button } from '@mui/material';
import {reactLocalStorage} from 'reactjs-localstorage';





export default function Login() {

  const [USER, setUsers] = useState([]);
  const [seeUser, SeeUser] = useState([]);
  const [seePassword, SeePassword] = useState([]);
  const usersCollectionRef = collection(db, "user");

  const getUsers = async () => {
    console.log(seeUser, seePassword)
    const data = await getDocs(q);
    console.log(data)
    if(data.docs.length<1){
      alert("Username or Password not found")
    }
    else{
      reactLocalStorage.setObject('Xuser', data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      window.location.href = "/home"
    }
    
  };


  function rubTextbox1(e) {
    SeeUser(e.target.value)
  }
  function rubTextbox2(e) {
    SeePassword(e.target.value)
  }


  const shoot = () => {
    getUsers()
  }
  const q = query(collection(db, "user"), where("user", "==", seeUser), where("password", "==", seePassword));
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" onChange={rubTextbox1} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={rubTextbox2} />
        </label>
        <div>
          <Button variant="contained"
            onClick={() => {
              shoot()
            }}
          >Login</Button>
        </div>
      </form>
    </div>
  )
}