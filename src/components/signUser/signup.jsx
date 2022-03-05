import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Google from "@mui/icons-material/Google";

const Reg = () => {
  console.log('You have been successfully registered');
}

const SignUp = ({text, classes}) => {
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
              label="First name"
              variant="outlined"
            />
            <TextField
              id="2"
              label="Email"
              variant="outlined"
              type="email"
            />
            <TextField
              id="3"
              label="password"
              variant="outlined"
              type="password"
              autoComplete="off"
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" sx={classes.Button} onClick={Reg}>
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
};

export default SignUp;