import  React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';



export default function ShowStudent() { 
    const[studentLists , setStudentList] = React.useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/students').then((allStudents) => {
            setStudentList(allStudents.data);
        })
    },[])
  return (
    <>
    <h2>ALL STUDENTS</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >RegNO</TableCell>
            <TableCell >NAME</TableCell>
            <TableCell >GRADE</TableCell>
            <TableCell >SECTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentLists.map((student, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{student.RegNO}</TableCell>
              <TableCell >{student.NAME}</TableCell>
              <TableCell >{student.GRADE}</TableCell>
              <TableCell >{student.section}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
