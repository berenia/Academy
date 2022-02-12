import React from "react";
import TrendingCard from "./trendingCard";
import { ss1, ss2, ss3, ss4 } from "./Images/image";
import { Grid, Box, Typography, Button } from "@mui/material";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

function TrendingCourses() {
  const trends = [
    { id: 1, name: "Complete Microsoft Office", descr: "Lorem ipsum dolor sit amet consectetur adipiscing elit", image: ss1 },
    { id: 2, name: "PHP", descr: "Lorem ipsum dolor sit amet consectetur adipiscing elit", image: ss2 },
    { id: 3, name: "React.js with node.js", descr: "Lorem ipsum dolor sit amet consectetur adipiscing elit", image: ss3 },
    { id: 4, name: "Node.js", descr: "Lorem ipsum dolor sit amet consectetur adipiscing elit", image: ss4 }
  ];
  return (
    <Box sx={{ backgroundColor: "#D7DBDD" }}>
      <Typography variant="h5" sx={{ backgroundColor: "#eee", p: 2, fontWeight: "bold", textAlign: "center" }}>
        OTHER TRENDING COURSES
      </Typography>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", m: 2 }}
        container
        rowSpacing={0}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
      >
        {trends.map(trend => (
          <TrendingCard key={trend.id} name={trend.name} descr={trend.descr} Image={trend.image} />
        ))}
      </Box>
      <Typography align="center">
        <Button sx={{ textAlign: "center" }}>
          Read More <ArrowRightAltOutlinedIcon />
        </Button>
      </Typography>
    </Box>
  );
}

export default TrendingCourses;
