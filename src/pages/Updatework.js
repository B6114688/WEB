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
import { Update } from "@mui/icons-material";
import { useLocation } from 'react-router-dom'
import * as dayjs from "dayjs";

const Updatework = () => {
  const location = useLocation()
  console.log("555999",location)
  
  const [idw, setID] = useState(location.state?.user?.idw);
  const [project, setProject] = useState(location.state?.user?.project);
  const [detail, setDetail] = useState(location.state?.user?.detail);
  const [status, setStatus] = useState(location.state?.user?.status);
  const [date, setDate] = React.useState(dayjs(location.state?.user?.date).format("YYYY/MM/DD"));
  const [dateEnd, setDateEnd] = React.useState(dayjs(location.state?.user?.dateEnd).format("YYYY/MM/DD"));

  const [UpdateAt, setUpdateAt] = React.useState(dayjs(new Date(dayjs().add(543, "year").format("YYYY/MM/DD")).getTime()));

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
  console.log("ddddd",dayjs("28/02/2565"))
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
  const getDateEnd = (e) => {
    setDateEnd(e.target.value);
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

      if (status === "ดำเนินการเสร็จสิ้น") {
        if (dateEnd >= UpdateAt) {
          await addDoc(collection(db, "addnew"), {
            idw: idw,
            project: project,
            detail: detail,
            status: status,
            date: new Date(dayjs(date).add(543, "year").format("YYYY/MM/DD")).getTime(),
            dateEnd: new Date(dayjs(dateEnd).add(543, "year").format("YYYY/MM/DD")).getTime(),
            nameUser: name,
            UpdateAt: new Date(dayjs().add(543, "year").format("YYYY/MM/DD")).getTime(),
            sum: "เสร็จตามกำหนดเวลา",
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
        else{
          await addDoc(collection(db, "addnew"), {
            idw: idw,
            project: project,
            detail: detail,
            status: status,
            date: new Date(dayjs(date).add(543, "year").format("YYYY/MM/DD")).getTime(),
            dateEnd: new Date(dayjs(dateEnd).add(543, "year").format("YYYY/MM/DD")).getTime(),
            nameUser: name,
            UpdateAt: new Date(dayjs().add(543, "year").format("YYYY/MM/DD")).getTime(),
            sum: "เสร็จเลยกำหนดเวลา",
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
      }else{
        await addDoc(collection(db, "addnew"), {
          idw: idw,
          project: project,
          detail: detail,
          status: status,
          date: new Date(dayjs(date).add(543, "year").format("YYYY/MM/DD")).getTime(),
          dateEnd: new Date(dayjs(dateEnd).add(543, "year").format("YYYY/MM/DD")).getTime(),
          nameUser: name,
          UpdateAt: new Date(dayjs().add(543, "year").format("YYYY/MM/DD")).getTime(),
          sum: "ยังทำไม่เสร็จ",
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
    window.location.href="/worktab"

  };

  return (
    <>
      <from noValidate autoComplete="off">
        <div className="Boxmaster">
          <Notification notify={notify} setNotify={setNotify} />
          <div>
            <FormControl sx={{ m: 0.5, width: "20ch" }} variant="outlined">
              <TextField
                disabled
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
                disabled
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
            <FormControl sx={{ m: 0.5, width: "35ch" , marginRight: "5ch" }} variant="outlined" h>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TextField
                  disabled
                  label="วันรับงาน"
                  value={dayjs(date).format("DD/MM/YYYY")}
                  id="date1"
                  //minDate={new Date('2017-01-01')}
                  
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>{" "}
            </FormControl>
            <br /><br />
            <FormControl sx={{ m: 0.5, width: "35ch" }} variant="outlined" h>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TextField
                  disabled
                  label="วันกำหนดเสร็จ"
                  value={dayjs(dateEnd).format("DD/MM/YYYY")}
                  id="date2"
                  //minDate={new Date('2017-01-01')}
                  
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>{" "}
            </FormControl>
            <br /><br />
            <FormControl sx={{ m: 0.5, width: "35ch" }} variant="outlined" h>
              <InputLabel>สถานะ</InputLabel>
              <Select
                id="status"
                value={status}
                label="status"
                onChange={getStatus}
                error={statusError}
              >
                <MenuItem value="ยังไม่ดำเนินการ">ยังไม่ดำเนินการ</MenuItem>
                <MenuItem value="กำลังดำเนินการ">กำลังดำเนินการ</MenuItem>
                <MenuItem value="ดำเนินการเสร็จสิ้น">ดำเนินการเสร็จสิ้น</MenuItem>
              </Select>
            </FormControl>
            <br /><br />
            <Button  sx={{  width: "35ch" }} variant="contained" onClick={handleSubmit}>
              Save Update
            </Button>
          </div>      
        </div> 
      </from>
    </>
  );
};

export default Updatework;
