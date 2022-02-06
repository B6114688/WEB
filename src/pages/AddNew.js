import React, { useState } from "react";
//import * as React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import Date55 from './Date';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Addnew.css";
import { db } from "../firebase-config";
import { collection, addDoc, doc } from "firebase/firestore";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { reactLocalStorage } from "reactjs-localstorage";
import Notification from "../components/Notification";

const AddNew = () => {
  const [idw, setID] = useState("");
  const [project, setProject] = useState("");
  const [detail, setDetail] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = React.useState(new Date());
  const [idwError, setIDError] = useState(false);
  const [projectError, setProjectError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [statusError, setStatusError] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const name = reactLocalStorage.getObject("Xuser")[0]?.user;
  const role = reactLocalStorage.getObject("Xuser")[0]?.role;

  const getId = (e) => {
    setID(e.target.value);
  };
  const getProject = (e) => {
    setProject(e.target.value);
  };
  const getDetail = (e) => {
    setDetail(e.target.value);
  };
  const getStatus = (e) => {
    setStatus(e.target.value);
  };
  const getDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIDError(false);
    setProjectError(false);
    setDetailError(false);
    setStatusError(false);
    if (
      idw !== "" &&
      project !== "" &&
      detail !== "" &&
      status !== ""
    ) {
      await addDoc(collection(db, "addnew"), {
        idw: idw,
        project: project,
        detail: detail,
        status: status,
        date: date.toLocaleDateString(),
        nameUser: name,
      })
        .then((res) => {
          console.log("addnew");
          setNotify({
            isOpen: true,
            message: "Successfully",
            type: "success",
          });
          setID("");
          setProject("");
          setDetail("");
          setStatus("");
        })
        .catch((err) => {
          console.log("EROR");
        });

    }
    if (idw === "") {
      setIDError(true)
    }
    if (project === "") {
      setProjectError(true)
    }
    if (detail === "") {
      setDetailError(true)
    }
    if (status === "") {
      setStatusError(true)
    }


  };

  return (
    <>
      <from noValidate autoComplete="off">
        <div className="Boxmaster">
          <Notification notify={notify} setNotify={setNotify} />
          <div>
            <FormControl sx={{ m: 0.5, width: "20ch" }} variant="outlined">
              <TextField
                label="ID"
                id="idw"
                name="idw"
                value={idw}
                onChange={getId}
                error={idwError}
              />
            </FormControl>
            <FormControl sx={{ m: 0.5, width: "54.10ch" }} variant="outlined">
              <TextField
                label="Project"
                id="project"
                name="project"
                value={project}
                onChange={getProject}
                error={projectError}
              />
            </FormControl>
          </div>

          <br />
          <div>
            <FormControl sx={{ m: 0.5, width: "75ch" }} variant="outlined" h>
              <TextField
                label="Detail"
                id="detail"
                name="detail"
                value={detail}
                onChange={getDetail}
                error={detailError}
              />
            </FormControl>
          </div>
          <br />
          <div>
            <FormControl sx={{ m: 0.5, width: "30ch" }} variant="outlined" h>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="date"
                  value={date}
                  id="date"
                  //minDate={new Date('2017-01-01')}
                  onChange={(getDate) => {
                    setDate(getDate);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>{" "}
            </FormControl>
            <FormControl sx={{ m: 0.5, width: "30ch" }} variant="outlined" h>
              <InputLabel>สถานะ</InputLabel>
              <Select
                id="status"
                value={status}
                label="status"
                onChange={getStatus}
                error={statusError}
              >
                <MenuItem value="ยังไม่ทำ">ยังไม่ทำ</MenuItem>
                <MenuItem value="กำลังทำ">กำลังทำ</MenuItem>
                <MenuItem value="เสร็จสิ้น">เสร็จสิ้น</MenuItem>
              </Select>
            </FormControl>
          </div>
          <br />
          <div>
            <Button variant="contained" onClick={handleSubmit}>
              Save
            </Button>
          </div>
        </div>
      </from>
    </>
  );
};

export default AddNew;
