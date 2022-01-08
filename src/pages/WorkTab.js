import React, { useEffect, useState } from "react";
//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import {db} from "../firebase-config";
import {
  collection,
  getDocs,
  doc,
} from "firebase/firestore";
/*function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData(1,'456789','ลง windows 10 ต้องเสร็จภายในวันนี้', '20/12/2021','เสร็จสิ้น'),
  
  
];*/

function WorkTab() {

  const [add, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "addnew");

 useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data)
      setUsers(data.docs.map((doc) => (console.log(doc.data()), {...doc.data() })));

    };

    getUsers();
  }, []);
console.log("dddddddddddd",add)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>รหัสงาน</TableCell>
            <TableCell align="left">ชื่องาน</TableCell>
            <TableCell align="left">รายละเอียด</TableCell>
            <TableCell align="center">วันที่รับ</TableCell>
            <TableCell align="left">สถานะ</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {add.map((user) => {return (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{user.id}</TableCell>
              <TableCell align="left">{user.project}</TableCell>
              <TableCell align="left">{user.detail}</TableCell>
              <TableCell align="center">{user.date}</TableCell>
              <TableCell align="left">{user.status}</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <Button variant="contained">แก้ไข</Button>
            </TableRow>
          )}
          )}
        </TableBody>
      </Table>
    </TableContainer>
          
  );
}

export default WorkTab;