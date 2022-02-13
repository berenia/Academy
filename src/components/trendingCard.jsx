import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

function TrendingCard(props) {
  return (
    <div>
      <Card
        sx={{
          display: { sm: "flex", md: "inline-flex" },
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          m: 2,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: { sm: "100%", md: "20%" }, height: { xs:150, sm: 100, md: "auto" } }}
          image={props.Image}
          alt="trending courses"
        />
        <CardContent
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: { sm: "100%", md: "70%" },
          }}
        >
          <Typography component="div" variant="h5">
            {props.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.descr}
          </Typography>
          <CardActions >
          <Button style={{ textTransform: "none"}} variant="outlined" size="small">
            Details
          </Button>
        </CardActions>
        </CardContent>
        
      </Card>
    </div>
  );
}

export default TrendingCard;
