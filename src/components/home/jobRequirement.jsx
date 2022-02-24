import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  FlatCard,
  FlatCardContent,
  FlatCardHeader,
} from "../assets/Berenia/FlatCard";
import JoinUs from "../static/images/jpg/joinus.jpg";

const TargetCard = (props) => {
  return (
    <FlatCard>
      <FlatCardHeader>{props.level}</FlatCardHeader>
      <FlatCardContent>{props.intro}</FlatCardContent>
    </FlatCard>
  );
};

const JobRequirement = () => {
  return (
    <Grid
      container
      spacing={5}
      sx={{ paddingLeft: { xs: 2, md: 15 }, paddingRight: { xs: 2, md: 15 }, mt: 5, backgroundColor: '#e2eaef'}}
    >
      
      <Grid item xs={12} md={6} sx={{ width: "100%", marginTop: -10 }}>
        <img
          src={JoinUs}
          style={{
            borderRadius: "50%",
            width: "400px",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          component="div"
          variant="h3"
          sx={{ textAlign: "center", fontWeight: 'bold'}}
        >
          Easy Way To Meet <br/>The job requirement
        </Typography>
        <Typography
          sx={{ padding: { xs: 0, md: 2 }, paddingTop: 2, fontSize: "20px" }}
        >
          We have Created System that will help you proficient in your skills
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </Typography>
      </Grid>
     
    </Grid>
  );
};

export default JobRequirement;
