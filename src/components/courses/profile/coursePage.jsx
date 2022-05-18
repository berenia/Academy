import React from "react";
import { Box, Typography } from "@mui/material";
import Profile from "./profile";

const coursesData = [
  {
    name: "Complete Microsoft Package",
    description: "This course will help you to handle office packages like MS Word, Excel, Visio,Access,Project. etc"
  },
  {
    name: "Complete Microsoft Package",
    description: "This course will help you to handle office packages like MS Word, Excel, Visio,Access,Project. etc"
  },
  {
    name: "Complete Microsoft Package",
    description: "This course will help you to handle office packages like MS Word, Excel, Visio,Access,Project. etc"
  },
  {
    name: "Complete Microsoft Package",
    description: "This course will help you to handle office packages like MS Word, Excel, Visio,Access,Project. etc"
  },
  {
    name: "Complete Microsoft Package",
    description: "This course will help you to handle office packages like MS Word, Excel, Visio,Access,Project. etc"
  }
];

export default function Courses() {
  return (
    <>
      <Box>
        <Profile />
        <Box
          sx={{
            width: { lg: "60%", md: "70%", sm: "65%" },

            pb: 2,
            ml: { lg: 33, md: 28, sm: 28, xs: 10 },
            mr: { lg: 15, md: 15, sm: 5, xs: 3 }
          }}
        >
          {coursesData.map(items => (
            <Box sx={{ borderRadius: 2, boxSizing: "border-box", boxShadow: 2, m: 1, p: 1 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>{items.name}</Typography>
              <Typography variant="body2">{items.description}</Typography>
              <Typography sx={{ color: "green" }}>Completed</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
