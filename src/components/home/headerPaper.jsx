import React from "react";
import Box from "@mui/material/Box";
import { Button, Paper, Typography } from "@mui/material";
import { HeaderPaperStyle } from "../assets/MUIstyles/homeStyle";

const classes = HeaderPaperStyle;

const Papers = (props) => {
  return (
    <Paper sx={classes.PaperStyle}>
      <Typography variant="h4" component="div">
        {props.caption}
        <p style={{ fontSize: "20px", fontWeight: "regular" }}>{props.intro}</p>
      </Typography>
      <Button variant="contained">Enroll now</Button>
    </Paper>
  );
};

const HeaderPaper = () => {
  const PaperData = [
    {
      catId: "1",
      caption: "Become a web Developer",
      intro:
        "You can still be a developer in 3 months time. Just join our offline bootcamp",
    },
    {
      catId: "2",
      caption: "Master Office skills",
      intro:
        "You can still be a developer in 3 months time. Just join our offline bootcamp",
    },
  ];
  return (
    <Box sx={classes.BoxStyle}>
      {PaperData.map((paperData) => (
        <Papers
          catId={paperData.catId}
          caption={paperData.caption}
          intro={paperData.intro}
        />
      ))}
      ;
    </Box>
  );
};

export default HeaderPaper;
