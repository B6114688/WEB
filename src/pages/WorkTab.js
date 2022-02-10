import React, { useEffect, useState } from "react";
//import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddNew from "./AddNew";
import { Button } from "@mui/material";
import { db } from "../firebase-config";
import { reactLocalStorage } from 'reactjs-localstorage';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,query, orderBy,
} from "firebase/firestore";
import { Link } from 'react-router-dom'
import addnew from './AddNew';
import * as dayjs from "dayjs";
/*function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData(1,'456789','ลง windows 10 ต้องเสร็จภายในวันนี้', '20/12/2021','เสร็จสิ้น'),
  
  
];*/
const name = reactLocalStorage.getObject("Xuser")[0]?.user
function WorkTab() {
  const [add, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "addnew");
  


  const deleteAll = async (id) => {
    const userDoc = doc(db, "addnew", id);
    const a = await deleteDoc(userDoc);
    getUsers();
  };

  const getUsers = async () => {
    const q = query(usersCollectionRef, orderBy("date", "desc"));
    const data = await getDocs(q);
    console.log(data);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

  };

  console.log(add);
  useEffect(() => {
    getUsers();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>รหัสงาน</TableCell>
            <TableCell align="left">ชื่องาน</TableCell>
            <TableCell align="left">รายละเอียด</TableCell>
            <TableCell align="center">วันที่รับ</TableCell>
            <TableCell align="center">วันกำหนดเสร็จ</TableCell>
            <TableCell align="center">วันที่อัพเดท</TableCell>
            <TableCell align="left">สถานะ</TableCell>
            <TableCell align="left">ส่งงาน</TableCell>
            <TableCell align="left">เจ้าหน้าที่รับงาน</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {add.map((user) => {
            if (user.nameUser === name) {
              return (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.idw}
                  </TableCell>
                  <TableCell align="left">{user.project}</TableCell>
                  <TableCell align="left">{user.detail}</TableCell>
                  <TableCell align="center">{dayjs(user.date).format("DD/MM/YYYY")}</TableCell>
                  <TableCell align="center">{dayjs(user.dateEnd).format("DD/MM/YYYY")}</TableCell>
                  <TableCell align="center">{dayjs(user.UpdateAt).format("DD/MM/YYYY")}</TableCell>
                  <TableCell align="left">{user.status}</TableCell>
                  <TableCell align="left">{user.sum}</TableCell>
                  <TableCell align="left">{user.nameUser}</TableCell>
                  <TableCell align="left"></TableCell>
                  <Link to={"/update"} state = {{user:user}}>
                    <Button variant="contained"  >ความคืบหน้า</Button>
                  </Link>


                  <Button
                    variant="contained"
                    onClick={() => {
                      deleteAll(user.id);
                    }}
                  >
                    delete
                  </Button>

                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WorkTab;
