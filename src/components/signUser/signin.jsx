import propTypes from 'prop-types';
import { Box, Button, TextField, Typography } from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Google from "@mui/icons-material/Google";


const Login = () => {
  console.log('You have successfully login');
}
const SignIn = ({text, classes}) => {
  
    return(
      <>
      <Typography
              component="div"
              variant="h4"
              sx={{
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "bold",
                marginTop: "20px",
                color: '#333'
              }}
            >
              {text}
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
                id="1"
                label="Email"
                variant="outlined"
                type="email"
              />
              <TextField
                id="2"
                label="password"
                variant="outlined"
                type="password"
                autoComplete="off"
              />
              
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button variant="contained" sx={classes.Button} onClick={Login}>
                  {text}
                </Button>
              </div>
              <Button variant="contained" startIcon={<Facebook />}>
                {text} using Facebook
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#eb2245" }}
                startIcon={<Google />}
              >
                {text} using Google
              </Button>
            </Box>
            </>
    )
  }

  SignIn.propTypes = {
    text: propTypes.string,
    classes: propTypes.object,
    loginUser: propTypes.func,
  }
  export default SignIn;