import React from "react";
import { Box, Typography } from "@mui/material";
import ss1 from "../static/images/jpg/ss1.jpg";
import CustomerCard from "./customerCard";

export default function CustomerReview() {
  const data = [
    {
      id: 1,
      name: "Joseph Jackson",
      title: "Product Manager",
      test: "Auto Flow makes it easy to draw stunning flows for creating WireFrames, Userflows,"
    },
    {
      id: 2,
      name: "Joseph Jackson",
      title: "Product Manager",
      test: "Auto Flow makes it easy to draw stunning flows for creating WireFrames, Userflows,"
    },
    {
      id: 3,
      name: "Joseph Jackson",
      title: "Product Manager",
      test: "Auto Flow makes it easy to draw stunning flows for creating WireFrames, Userflows,"
    }
  ];
  return (
    <Box sx={{ bgcolor: "#fff", p: 2 }}>
      <Typography variant="h3" align="center">
        What Our Customers Says
      </Typography>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#efefef",
          flexWrap: "wrap",
          justifyContent: 'space-around',
          "& > :not(style)": {
            m: 3,
            width: 300,
            height: 350
          }
        }}
        align="center"
      >
        {data.map(datas => (
          <CustomerCard key={datas.id} image={ss1} name={datas.name} title={datas.title} test={datas.test} />
        ))}
      </Box>
    </Box>
  );
}
