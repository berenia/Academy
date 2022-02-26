import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { SectionCardStyle } from "../assets/MUIstyles/homeStyle";
import {
  FlatCard,
  FlatCardContent,
  FlatCardHeader,
} from "../assets/Berenia/FlatCard";
import JoinUs from "../static/images/jpg/team.jpg";

const TargetCard = (props) => {
  return (
    <FlatCard>
      <FlatCardHeader>{props.level}</FlatCardHeader>
      <FlatCardContent>{props.intro}</FlatCardContent>
    </FlatCard>
  );
};

const classes = SectionCardStyle;

const JoinOurTeam = () => {
  return (
    <Grid
      container
      spacing={5}
      sx={classes.main}
    >
       <Grid item xs={12} md={6} sx={classes.joinUsImageArea}>
        <img
          src={JoinUs}
          style={classes.image}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography
          component="div"
          variant="h3"
          sx={classes.textArea}
        >
          Join the excellent Team <br/> For better performance
        </Typography>
        <Typography
          sx={classes.text}
        >
          We have Created System that will help you proficient in your skills
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat...
          <Button variant="outlined">Read more</Button>
        </Typography>
      </Grid>
     
    </Grid>
  );
};

export default JoinOurTeam;
