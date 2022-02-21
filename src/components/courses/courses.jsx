import React from "react";
import {  Box, Typography } from "@mui/material";
import CourseCard from "./courseCard";
import bb1 from '../static/images/jpg/bb1.jpg';
import bb2 from '../static/images/jpg/bb2.jpg';
import bb3 from '../static/images/jpg/bb3.jpg';
import bb4 from '../static/images/jpg/bb4.jpg';
import bb5 from '../static/images/jpg/bb5.jpg';
import bb6 from '../static/images/jpg/bb6.jpg';

function Courses() {
  const OfficeCourses = [
    { id: "1", name: "Microsoft Office Word", image: bb1 },
    { id: "2", name: "Microsoft Office PowerPoint", image: bb2 },
    { id: "3", name: "Microsoft Office Excel", image: bb3 },
    { id: "4", name: "Microsoft Office Access", image: bb4 },
    { id: "5", name: "Microsoft Office Project", image: bb5 },
    { id: "6", name: "Microsoft Office Visio", image: bb6 }
  ];

  const WebCourses = [
    { id: "1", name: "HTML5 and CSS 3", image: bb1 },
    { id: "2", name: "JavaScript", image: bb2 },
    { id: "3", name: "Advanced PHP", image: bb3 },
    { id: "4", name: "Node.js for Backend Dev", image: bb4 },
    { id: "5", name: "React.js for Frontend Dev", image: bb5 },
    { id: "6", name: "Microsoft Office Visio", image: bb6 }
  ];
  return (
    <Box sx={{ bgcolor: "#fff", p: 3, borderRadius: 3 }}>
      <Box>
        <Typography sx={{ fontWeight: "bold" }} variant="h4">
          Office Technology Skill
        </Typography>
        <Typography variant="body1">Be more productive by being proficient at your work</Typography>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: { lg:"repeat(3, 1fr)", md:"repeat(2, 1fr)", sm: "repeat(2, 1fr)", xs: "repeat(1, 1fr)"}}}>
        {OfficeCourses.map(officeCourse => (
          <CourseCard key={officeCourse.id} name={officeCourse.name} image={officeCourse.image} />
        ))}
      </Box>
      <Typography sx={{ fontWeight: "bold" }} variant="h4">
        Web Technology Skill
      </Typography>
      <Typography variant="body1">Be more productive by being proficient at your work</Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: { lg:"repeat(3, 1fr)", md:"repeat(2, 1fr)", sm: "repeat(2, 1fr)", xs: "repeat(1, 1fr)"} }}>
        {WebCourses.map(officeCourse => (
          <CourseCard key={officeCourse.id} name={officeCourse.name} image={officeCourse.image} />
        ))}
      </Box>
    </Box>
  );
}

export default Courses;
