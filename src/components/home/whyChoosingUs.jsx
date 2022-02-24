import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  FlatCard,
  FlatCardContent,
  FlatCardHeader,
} from "../assets/Berenia/FlatCard";
import WhyUsImage from "../static/images/jpg/whyus.png";

const school = [
  {
    id: 1,
    level: "Secondary",
    intro:
      "We provide avenue for secondary school students to explore real world skills and makes impact...",
  },
  {
    id: 2,
    level: "University",
    intro:
      "We provide avenue for University students to explore real world skills and makes impact...",
  },
  {
    id: 3,
    level: "Professional",
    intro:
      "We provide avenue for Professiona to explore real world skills and makes impact...",
  },
];

const TargetCard = (props) => {
  return (
    <FlatCard>
      <FlatCardHeader>{props.level}</FlatCardHeader>
      <FlatCardContent>{props.intro}</FlatCardContent>
    </FlatCard>
  );
};

const WhyChoosingUs = () => {
  return (
    <Grid
      container
      spacing={5}
      sx={{ paddingLeft: { xs: 2, md: 15 }, paddingRight: { xs: 2, md: 15 } }}
    >
      <Grid item xs={12} md={6} sx={{ width: "100%", marginTop: -10 }}>
        <img
          src={WhyUsImage}
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
          sx={{ fontWeight: 'bold', textAlign: "center" }}
        >
          Why Choosing Us
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
      <Grid
        item
        md={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {school.map((target) => (
          <TargetCard
            key={target.level}
            level={target.level}
            intro={target.intro}
          />
        ))}
        ;
      </Grid>
    </Grid>
  );
};

export default WhyChoosingUs;
