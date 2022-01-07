import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
/** */
const rows = [
  createData('10001', 'ลง Windown', 'เครื่องของแผนกมิเตอร์', '12/1/2021', 'เสร็จ'),
  createData('10002', 'ลง Windown', 'เครื่องของแผนกบัญชี', '12/20/2021', 'เสร็จ'),
  
];

export default function WorkTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>รหัสงาน</TableCell>
            <TableCell align="right">ชื่องาน</TableCell>
            <TableCell align="right">รายละเอียด</TableCell>
            <TableCell align="right">วันที่รับ</TableCell>
            <TableCell align="right">สถานะ</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <Button variant="contained">แก้ไข</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}