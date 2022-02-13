import React from "react";
import { Card, CardContent, CardActions, CardMedia, Button, Typography, Rating } from "@mui/material";
import { spacing } from "@mui/system";

export default function courseCard(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 330, borderRadius: 10, boxShadow: 4, m: 2 }}>
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
        <CardActions sx={{display: 'grid', gridTemplateColumns:"repeat(2, 1fr)", ml:3, mr:3}}>
          <Button style={{ textTransform: "none"}} variant="outlined" size="small">
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
