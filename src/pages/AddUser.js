import React , { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {db} from "../firebase-config"
import {
  collection,
  addDoc,
  doc,
} from "firebase/firestore";



function AddUser() {
    const [userx, setUserx] = useState()
    const [passx, setPassx] = useState()
    const [rolex, setRolex] = useState()


    const getUserx = (e) => {
        setUserx(e.target.value) 
      }
      const getPassx = (e) => {
        setPassx(e.target.value) 
      }
      const getRolex = (e) => {
        setRolex(e.target.value) 
      }
    
      const handleSubmit = async (e) =>  {
        e.preventDefault();

        await addDoc(collection(db, "user"), {
          user:userx,
          password:passx,
          role:rolex,
        }).then((res) => {console.log('User ed') 
        setUserx("")
        setPassx("")
              
        })
        .catch((err) => {console.log(err)})
      };

    return (
        <div >
            <div >
                <div className='setMid'><br />
                    <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                        <TextField label="User" id="userx"  value={userx} onChange={getUserx} /> </FormControl><br />


                    <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                        <TextField label="Password" id="passx" value={passx} onChange={getPassx} /> </FormControl><br />

                    <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="rolex"
                            value={rolex}
                            label="Role"
                            onChange={getRolex}
                        >
                            <MenuItem value="admin">admin</MenuItem>
                            <MenuItem value="user">user</MenuItem>

                        </Select>
                    </FormControl><br />

                    <Button variant="contained" sx={{ m: 1, width: '20ch' }} onClick={handleSubmit}>Save</Button>

                </div>
            </div>
        </div>
    );
}

export default AddUser;