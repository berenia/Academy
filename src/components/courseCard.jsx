import React from "react";
import { Card, CardContent, CardActions, CardMedia, Button, Typography, Rating } from "@mui/material";

export default function courseCard(props) {
  return (
    <div>
      <Card sx={{ width: 330, borderRadius: 10, boxShadow: 4, m: 2 }}>
        <CardMedia component="img" height="140" image={props.image} alt={props.altText} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Berenia Tutor
          </Typography>
          <Typography>2 Weeks | Cohort starts 10th march</Typography>
          <Typography>4.7 (2 rating) | Learners 2</Typography>
          <Rating name="read-only" value={4.7} readOnly />
        </CardContent>
        <CardActions>
          <Button style={{ textTransform: "none" }} size="small">
            Details
          </Button>
          <Button style={{ textTransform: "none" }} variant="contained" size="small">
            Enroll
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
