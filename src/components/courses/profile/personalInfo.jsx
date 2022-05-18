import React from "react";
import { Box, Typography, TextField, Select, MenuItem, InputLabel } from "@mui/material";
import Profile from "./profile";

export default function PersonalInfo() {
  return (
    <Box>
      <Profile />
      <Typography sx={{ ml: 21, textAlign: "center", fontWeight: "bold", fontSize: "1.5rem" }}>Personal Information</Typography>
      <Box
        sx={{
          display: "grid",
          ml: { lg: 30, md: 25, sm: 23, xs: 10 },
          mb: 5,
          gridTemplateColumns: { lg: "repeat(3,1fr)", sm: "repeat(1,1fr)" }
        }}
      >
        <TextField sx={{ m: 2 }} label="First Name" />
        <TextField sx={{ m: 2 }} label="Last Name" />
        <TextField sx={{ m: 2 }} label="Address" />
        <TextField sx={{ m: 2 }} type="date" label="Date of Birth" defaultValue="dob" />

        <TextField sx={{ m: 2 }} select label="Gender">
          <MenuItem value="m">Male</MenuItem>
          <MenuItem value="f">Female</MenuItem>
        </TextField>
        <TextField sx={{ m: 2 }} label="Profession" />
        <TextField sx={{ m: 2 }} label="Country" />
        <TextField sx={{ m: 2 }} label="State" />
        <TextField sx={{ m: 2 }} label="LGA" />
      </Box>
    </Box>
  );
}
