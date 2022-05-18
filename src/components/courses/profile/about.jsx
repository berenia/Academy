import React from "react";
import { Box, Typography, Avatar, Badge } from "@mui/material";
import { AddAPhoto } from "@mui/icons-material";

const name = "James Clear";
const email = "James@gmail.com";
const phone = "08164587649";
const gender = "male";
const dob = "20/06/1945";
const address = "14, Live Show, Bwari, Abuja";

export default function About() {
  return (
    <Box sx={{ boxSizing: "border-box", bgcolor: "#eee", borderRadius: 1, boxShadow: 2, mr: 0.1, ml: 1 }}>
      <Box
        sx={{
          mb: 1,

          display: { lg: "flex", md: "block" },
          ml:{md:30,sm:25, xs:10}
        }}>
        <Box sx={{ width: "15%", ml: { lg: 33, md: 0,sm:0 },mb:{md:2, sm:2,xs:1}, pt: 1 }}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={<Avatar alt="camera" src={AddAPhoto} sx={{ width: 40, height: 40 }} />}
          >
            <Avatar alt="display picture" src="/static/images/png/home_1.png" sx={{ width: 100, height: 100 }} />
          </Badge>
        </Box>
        <Box sx={{ width: "35%", ml: {lg:2, md:0} }}>
          <Typography variant="body1" sx={{ fontSize: 18, fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography>{email}</Typography>
          <Typography>{phone}</Typography>
          <Typography>{gender}</Typography>
          <Typography>{dob}</Typography>
          <Typography>{address}</Typography>
        </Box>
        <Box sx={{ width: "65%" }}>
          <Typography variant="body1" sx={{ fontSize: 18, fontWeight: "bolder" }}>
            About
          </Typography>
          <Typography>
            I just love to be real and no other thing. I just love to be real and no other thing. I just love to be real and no
            other thing. I just love to be real and no other thing. I just love to be real and no other thing. I just love to be
            real and no other thing.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
