import React from "react";
import Profile from "./profile";
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import bb8 from "../../static/images/png/bb8.png";

const data = [
  { course: "Complete Microsoft Office", name: "James Joe", email: "email@gmail.com", phone: "+2347012546109" },
  { course: "Frontend Development with React.js", name: "John Jack", email: "email@gmail.com", phone: "+2347012546109" },
  { course: "Backend Development with Node.js", name: "Mack Cole", email: "email@gmail.com", phone: "+2347012546109" }
];

export default function TutorContact() {
  return (
    <>
      <Box sx={{ bgcolor: "#ddd" }}>
        <Profile />
        <Box
          sx={{
            display: "grid",
            ml: { lg: 33, md: 33, sm: 28, xs: 10 },
            mt: 0.1,
            mr: { lg: 20, sm: 0, xs: 0 },
            mb: 5,
            bgcolor: "#fff",
            gridTemplateColumns: "repeat(1,1fr)"
          }}
        >
          {data.map(item => (
            <Card
              key={item.name}
              sx={{
                display: { sm: "flex", md: "inline-flex" },
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
                m: 2,
                width: { xs: "70%" },
                bgcolor: "#faf9f6"
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: { sm: "100%", md: "20%" }, height: { xs: 150, sm: 100, md: "auto" } }}
                image={bb8}
                alt="course logo"
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  width: { sm: "100%", md: "70%" },
                  fontWeight: "bolder",
                  fontSize: { lg: "1rem", sm: "0.8rem" },
                  color: "black"
                }}
              >
                <Typography sx={{ fontSize: "1.5rem" }} component="div">
                  {item.course}
                </Typography>
                <Typography component="div">Name: {item.name}</Typography>
                <Typography component="div">Email: {item.email}</Typography>
                <Typography component="div">Phone: {item.phone}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}
