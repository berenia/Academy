import React from "react";
import { Box, Typography } from "@mui/material";
import { ss1 } from "./Images/image";
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
          p: 5,
          flexWrap: "wrap",
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
