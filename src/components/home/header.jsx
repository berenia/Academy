import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { HeaderStyle } from "../assets/MUIstyles/homeStyle";

const classes = HeaderStyle;

const headerCaption = {
  caption: "For excellence and productivity",
  intro:
    "Join our intensive offline Bootcamp program, starting 10 March, 2022.Grab your opportunity now!!!",
};

const Header = () => {
  return (
    <div style={classes.header}>
      <Box sx={classes.textArea}>
        <Typography
          variant="h3"
          component="div"
          sx={{ textTransform: "uppercase", fontWeight: "bold" }}
        >
          {headerCaption.caption}
        </Typography>
        <Typography variant="h6" component="div" sx={classes.innerText}>
          {headerCaption.intro}
        </Typography>
        <Button key="apply now" sx={classes.defaultButton} variant="contained">
          Enroll NOw
        </Button>
      </Box>
    </div>
  );
};

export default Header;
