import React from "react";
import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

const RoundImage = styled.img`
  width: 150px;
  height: 150px;
  padding-left: 25%;
  padding-right: 20%;

  border-radius: 50%;
`;

function CustomerCard(props) {
  return (
    <Box>
      <Card sx={{ maxWidth: 345, minWidth: 280 }}>
        <CardActionArea sx={{ mt: 5 }}>
          <RoundImage src={props.image} />
          <CardContent sx={{ alignContent: "center", boxShadow: 2 }}>
            <Typography sx={{ pl: 5, fontSize: "bold" }} gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography gutterBottom variant="body1" align="center" component="div">
              {props.title}
            </Typography>
            <Typography align="center" variant="body1" color="text.secondary">
              {props.test}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default CustomerCard;
