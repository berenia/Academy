import { Box, Paper,Typography } from "@mui/material";
import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

// const PersonalDetails = ({ text, classes }) => {
//   return (
//     <>
//       <Typography
//         component="div"
//         variant="h4"
//         sx={{
//           textAlign: "center",
//           fontSize: "30px",
//           fontWeight: "bold",
//           marginTop: "20px",
//           color: "#333",
//         }}
//       >
//         {text}
//       </Typography>
//       <Box
//         component="form"
//         sx={{
//           "& > :not(style)": { m: 1, width: "97%" },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField id="1" label="First name" variant="outlined" />
//         <TextField id="2" label="Email" variant="outlined" type="email" />
//         <TextField
//           id="3"
//           label="password"
//           variant="outlined"
//           type="password"
//           autoComplete="off"
//         />
//         {/* <div>
//                 <TextField
//                   id="outlined-multiline-flexible"
//                   label="Multiline"
//                   multiline
//                   maxRows={2}
//                   //   value={value}
//                   //   onChange={handleChange}
//                   sx={{ width: "100%" }}
//                 />
//               </div> */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Button variant="contained" sx={classes.Button} onClick={Reg}>
//             {text}
//           </Button>
//         </div>
      
//       </Box>
//     </>
//   );
// };

const PayStack = () => {
  alert("dkjkgn");
};

const PayPal = () => {
  alert("dkjkgn");
};

const Bitcoin = () => {
  alert("dkjkgn");
};

const PaymentContainer = () => {
  return (
    <div>
      <Box  component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "97%" },
        }}
        noValidate
        autoComplete="off">
        
          <Typography>Enter your details</Typography>
     
        
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="CreditCard" control={<Radio />} label="CreditCard" icon={<PaymentsIcon />} />
        <FormControlLabel value="PayPal" control={<Radio />} label="PayPal" endIcon={<CreditCardIcon/>}/>
        <FormControlLabel value="Bitcoin" control={<Radio />} label="Bitcoin" endIcon={<MonetizationOnIcon />} />
       
      </RadioGroup>
      <hr />
    </FormControl>
        
      </Box>
    </div>
  );
}

export default PaymentContainer;