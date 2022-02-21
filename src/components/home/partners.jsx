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
const PartnerWithUs = () => {
  return (
    <Box sx={{ padding:{xs: 6, md:15 }, paddingTop:{xs: 10, md:12} }}>
      <Typography
        variant="h3"
        component="div"
        sx={{ textAlign: "center", mb: 8, width: '100%', fontWeight: 'bold' }}
      >
        Partner With Us Today <br/>
We love to have a deal with you
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
          <FlatCardHeader>Schools</FlatCardHeader>
          <FlatCardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </FlatCardContent>
        </FlatCard>

        <FlatCard>
          <FlatCardIcon>
            <CorporateFare />
          </FlatCardIcon>
          <FlatCardHeader>Organization</FlatCardHeader>
          <FlatCardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </FlatCardContent>
        </FlatCard>
      </div>
    </Box>
  );
};

export default PartnerWithUs;
