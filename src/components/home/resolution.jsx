import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { AlarmOn, CorporateFare, FactCheck } from "@mui/icons-material";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import {
  Button,
  FlatCard,
  FlatCardContent,
  FlatCardHeader,
  FlatCardIcon,
  ResolutionStyle,
} from "../assets/MUIstyles/homeStyle";

const classes = ResolutionStyle;
const Resolution = () => {
  return (
    <Box sx={{ padding:{xs: 6, md:15 }, paddingTop:{xs: 10, md:12} }}>
      <Typography
        variant="h3"
        component="div"
        sx={{ textAlign: "center", mb: 8, width: '100%', fontWeight: 'bold' }}
      >
        Final resolution to get the skill <br/>
        Its time to start the journey
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <FlatCard>
          <FlatCardIcon>
            <CastForEducationIcon />
          </FlatCardIcon>
          <FlatCardHeader>Technology</FlatCardHeader>
          <FlatCardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </FlatCardContent>
        </FlatCard>

        <FlatCard>
          <FlatCardIcon>
            <CorporateFare />
          </FlatCardIcon>
          <FlatCardHeader>Office</FlatCardHeader>
          <FlatCardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </FlatCardContent>
        </FlatCard>

        <FlatCard>
          <FlatCardIcon>
            <FactCheck />
          </FlatCardIcon>
          <FlatCardHeader>Business</FlatCardHeader>
          <FlatCardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </FlatCardContent>
        </FlatCard>
      </div>
    </Box>
  );
};

export default Resolution;
