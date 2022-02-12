import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function TrendingCard(props) {
  return (
    <div>
      <Card sx={{ display: "flex", m: 2 }}>
        <CardMedia component="img" sx={{ width: 151 }} image={props.Image} alt="trending courses" />
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.descr}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default TrendingCard;
