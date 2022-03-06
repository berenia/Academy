import React from "react";
import Profile from "./profile";
import { Box, Typography, TextField, FormControl, MenuItem, Button } from "@mui/material";

export default function TutorDesk() {
  return (
    <>
      <Box sx={{ ml: 5, bgcolor: "#e1e2e3" }}>
        <Profile />
        <Box
          component="main"
          sx={{
            boxShadow: 3,
            flexGrow: 1,
            bgcolor: "white",

            ml: { lg: 30, md: 28, sm: 26, xs: 5 },
            mr: { lg: 20, sm: 2 },
            mt: 0.1,
            p: 3,
            alignContent: "center",
            pb: 5
          }}
        >
          <Box sx={{ alignContent: "center", textAlign: "center" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>Tutor's Desk</Typography>

            <Typography align="justify" sx={{ alignItems: "center" }}>
              Kindly Submit your assignment on this page on or before the due date. Tutor will get back to you as soon as
              possible.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControl
              variant="standard"
              sx={{ p: 3, minWidth: { lg: 120 }, bgcolor: "skyblue", borderRadius: { l: 5, r: 5 } }}
            >
              <TextField sx={{ bgcolor: "#eee", borderRadius: 3 }} select label="Select Course Name">
                <MenuItem>
                  {" "}
                  <em>None</em>
                </MenuItem>
                <MenuItem> Programming</MenuItem>
                <MenuItem> Programming</MenuItem>
              </TextField>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                borderTop: 0,
                border: 1,
                bgcolor: "#fff",
                borderColor: "#fff",
                boxShadow: 3,
                borderRadius: 3
              }}
            >
              <FormControl variant="standard" sx={{ p: 3, minWidth: { lg: 200, md: 200, sm: 150 } }}>
                <TextField select label="Select Topic">
                  <MenuItem>
                    {" "}
                    <em>None</em>
                  </MenuItem>
                  <MenuItem> Programming</MenuItem>
                  <MenuItem> Programming</MenuItem>
                </TextField>
              </FormControl>

              <Button sx={{ m: 3 }} variant="contained" component="label">
                Upload File
                <input type="file" />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
