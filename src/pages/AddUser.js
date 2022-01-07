import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';




function AddUser() {
    return (
        <div >
            <div >
                <div className='setMid'><br />
                    <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                        <TextField label="User" id="" defaultValue="" /> </FormControl><br />


                    <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                        <TextField label="Password" id="" defaultValue="" /> </FormControl><br />

                    <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            //value={age}
                            //label="Age"
                            //onChange={handleChange}
                        >
                            <MenuItem value={10}>Admin</MenuItem>
                            <MenuItem value={20}>User</MenuItem>
                            
                        </Select>
                    </FormControl><br />

                    <Button  variant="contained" sx={{ m: 1, width: '20ch' }}>Save</Button>

                </div>
            </div>
        </div>
    );
}

export default AddUser;