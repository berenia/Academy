import React from "react";
import CoursePage from "./components/coursePage";
import "./App.css";
import TrendingCourses from "./components/trendingCourses";
import CustomerReview from "./components/customerReview";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ p: 5, bgcolor: "#eee" }}>
      <CoursePage />
      <TrendingCourses />
      <CustomerReview />
    </Box>
  );
}

export default App;
