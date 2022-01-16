import React , { useState } from 'react';
//import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import Date55 from './Date';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Addnew.css'
import {db} from "../firebase-config"
import {
  collection,
  addDoc,
  doc,
} from "firebase/firestore";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const AddNew = () => {
 // const [state,setState]= useState(initializeState);
//const [data, setData] = useState({});
//const {id,project,detail,status} = state ;
/*const handleInputChang = (e) => {
const {name, value} = e.target;
      setState({...state,[name]:value})
};*/
const [idw, setID] = useState()
const [project, setProject] = useState()
const [detail, setDetail] = useState()
const [status, setStatus] = useState()
//const [value, setValue] = React.useState(new Date());
const [date, setDate] = React.useState(new Date());


const getId = (e) => {
  setID(e.target.value) 
}
const getProject = (e) => {
  setProject(e.target.value) 
}
const getDetail = (e) => {
  setDetail(e.target.value) 
}
const getStatus = (e) => {
  setStatus(e.target.value) 
}
const getDate = (e) => {
  setDate(e.target.value) 
}
const handleSubmit = async (e) =>  {
  e.preventDefault();
  /*
  if(!id||!project||!detail||!status||!age){

  }*/
  await addDoc(collection(db, "addnew"), {
    idw:idw,
    project:project,
    detail:detail,
    status:status,
    date:date.toString(),
  }).then((res) => {console.log('addnew ed') 
  setProject("")
  setID("")
  setDetail("")
  
  })
  .catch((err) => {console.log(err)})

};
  return (
    <div>
      <div className='Boxmaster'> 
        <div >
        <FormControl sx={{ m: 0.5, width: '20ch' }} variant="outlined"> 
        <TextField label="ID" idw="idw" name="idw"    value={idw} onChange={getId}/> </FormControl>
        <FormControl sx={{ m: 0.5, width: '54.10ch' }} variant="outlined"> 
        <TextField label="Project" id="project" name = "project" value={project}onChange={getProject} /></FormControl>
        </div>
       
        <br/>
        <div>
        <FormControl sx={{ m: 0.5, width: '75ch' }} variant="outlined"h>
        <TextField  label="Detail" id="detail" name = "detail" value={detail} onChange={getDetail}/>
        </FormControl>
        </div>
        <br/>
        <div>
        <FormControl sx={{ m: 0.5, width: '30ch' }} variant="outlined"h>  <LocalizationProvider dateAdapter={AdapterDateFns}> <DesktopDatePicker
          label="date"
          value={date}
          id="date"
          //minDate={new Date('2017-01-01')}
          onChange={(getDate) => {
            setDate(getDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
          </LocalizationProvider>  </FormControl>
        
      <FormControl sx={{ m: 0.5, width: '30ch' }} variant="outlined"h>
        <InputLabel id="demo-simple-select-label">สถานะ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="status"
         value={status}
          label="status"
         onChange={ getStatus}
        >
          <MenuItem value="ยังไม่ทำ">ยังไม่ทำ</MenuItem>
          <MenuItem value="กำลังทำ">กำลังทำ</MenuItem>
          <MenuItem value="เสร็จสิ้น">เสร็จสิ้น</MenuItem>
        </Select>
        </FormControl>
        </div>
        <br/>
        <div>
       
        <Button  variant="contained" onClick={handleSubmit}>Save</Button>
        </div>
       
  
      
  
    
      
      </div>
    </div>
  );
}

export default AddNew ;