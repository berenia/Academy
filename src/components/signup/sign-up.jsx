import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Style } from "../assets/MUIstyles/signUp";
import SendIcon from "@mui/icons-material/Send";
import Facebook from "@mui/icons-material/Facebook";
import Google from "@mui/icons-material/Google";

const classes = Style;

const SignUp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: {xs: '10px', md:"40px"},
        paddingTop: {xs: '10px'},
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          width: { xs: "100%", sm:'80%', lg: "700px" },
          
        }}
      >
        <Paper
          sx={classes.IntroSide}
        >
          <h2>Welcome back</h2>
          <p>We'll like you to be part of our community.</p>

          <Button variant="contained" sx={classes.Switch} endIcon={<SendIcon />} > Sign in</Button>
        </Paper>

        <Paper
          sx={classes.FormSide}
          elevation={0}
        >
          <Typography
            component="div"
            variant="h4"
            sx={{ textAlign: "center", fontSize: "30px", fontWeight: 'bold', marginTop: '20px'}}
          >
            Sign Up
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "97%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
            />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
            />
            {/* <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={2}
                //   value={value}
                //   onChange={handleChange}
                sx={{ width: "100%" }}
              />
            </div> */}
            <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button variant="contained">
              Sign up
            </Button>
            </div>
            <Button variant="contained" startIcon={<Facebook />}>
              sign up using Facebook
            </Button>
            <Button variant="contained" sx={{backgroundColor: '#eb2245'}} startIcon={<Google />}>
              Sign up using Google
            </Button>
          </Box>
          
        </Paper>
      </Paper>
    </Box>
  );
};
export default SignUp;
