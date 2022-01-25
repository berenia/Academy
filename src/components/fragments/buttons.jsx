import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const styles = {
    "&.MuiButton-root": {
      border: "2px black solid"
    },
    "&.MuiButton-text": {
      color: "grey"
    },
    "&.MuiButton-containedInherit": {
        backgroundColor: "white",
        color: "red"
    },
    "&.MuiButton-outlined": {
      color: "#1976df",
      backgroundColor: "#fff",
      borderWidth: 2 ,
      borderColor:'#fff' ,
      boxShadow: 5,
    },
    "&.MuiButton-outlined:hover" :{
        backgroundColor: "inherit",
        color: "white",
        zIndex: 1000,
        borderColor:'#fff' 
    }
  };

export const  Contained = () => {
  return (
    <Stack spacing={4} direction="row">
      <Button variant="contained" color='inherit'>Contained</Button>
    </Stack>
  );
}

export const  Outline = () => {
    return (
      <Stack spacing={4} direction="row">
        <Button sx={styles} variant="outlined" color='secondary'>Outlined</Button>
      </Stack>
    );
  }