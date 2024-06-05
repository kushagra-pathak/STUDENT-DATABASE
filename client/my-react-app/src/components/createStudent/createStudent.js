import  React , {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
export default function Create() {
    const classes = makeStyles();

    const [student, setStudent] = useState({
        RegNO:0,
        NAME:'',
        GRADE:'',
        section:''


    });

    const createStudent = () =>{
        axios.post('http://localhost:5000/students',student)

    }
  return (
    <>
    <h2>CREATE STUDENT</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      <TextField id="filled-basic" label="RegNO" variant="filled" value={student.RegNo}  onChange={(event) => {
        setStudent({ ...student, RegNO:event.target.value})}} />
      <TextField id="filled-basic" label="NAME" variant="filled" value={student.NAME} onChange={(event) => {
        setStudent({ ...student, NAME:event.target.value})}} />
      <TextField id="filled-basic" label="GRADE" variant="filled" value={student.GRADE} onChange={(event) => {
        setStudent({ ...student, GRADE:event.target.value})}}/>
      <TextField id="filled-basic" label="SECTION" variant="filled" value={student.SECTION} onChange={(event) => {
        setStudent({ ...student, section:event.target.value})}}/>
      
      
      <Button variant="contained" onClick={createStudent}>CREATE</Button>
    
    </Box>
    </>
  );
}
