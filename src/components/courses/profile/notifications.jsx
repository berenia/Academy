import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import logo from "../../static/images/png/logo.png";
import Profile from "./profile";

export default function Notifications() {
  return (
    <>
      <Box>
        <Profile />

        <Box
          sx={{
            bgcolor: "#e1e2e3",
            pl: { lg: 35, md: 30, sm: 30 },
            mr: { lg: 5, md: 5, sm: 5 },
            pr: { lg: 15, md: 10, sm: 5, xs: 1 }
          }}
        >
          <Box sx={{ display: "flex", bgcolor: "#fff", pb: 9 }}>
            <Box sx={{ bgcolor: "#fff", boxShadow: 2, borderRadius: 2, p: { lg: 1, md: 0, sm: 0, xs: 0 }, ml: 1, mt: 0.1 }}>
              <CardMedia
                component="img"
                src={logo}
                sx={{
                  width: { lg: "100%", sm: 0, xs: 0 },
                  height: { lg: 50, md: 0, sm: 0 }
                }}
              />
            </Box>
            <Box
              sx={{
                bgcolor: "#fff",
                ml: { lg: 1, sm: 2, xs: 10 },

                border: 1,
                borderColor: "#eee",
                borderRadius: 2,
                boxShadow: 1,
                p: 1
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                <i>From</i>: Berenia
              </Typography>
              <Typography variant="body1" sx={{ width: "100%" }}>
                Kindly be informed that lecture will not be holding tomorrow due to the public holiday
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
