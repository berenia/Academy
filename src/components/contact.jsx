import React from "react";
import { Button,  Paper, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  ContactPhone,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { ListHeader, ListIcon, ListIconWrapper } from "./assets/Berenia/List";

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: {xs: 'transparent', md:"#147aff55"},
        display: "flex",
        justifyContent: "center",
        padding: "40px",
        paddingTop: "40px",
        margin: "40px",
        marginTop: '0px',
        padding: "200px",
      }}
    >
      <Paper
        sx={{
          padding: "50px",
          backgroundColor: "#fff",
          boxShadow: "5px 15px 30px 5px #ccc",
          display: "flex",
          flexDirection: {xs: 'column', md:"row"},
          justifyContent: "space-between",
          width: {xs: '450px', md:"100%"},
        }}
      >
        <Paper
          sx={{
            backgroundColor: "#1976d2",
            width: {xs: '100%', lg: "45%"},
            height: "400px",
            position: "relative",
            left: {xs: 'none', md:"-100px"},
            boxShadow: "5px 10px 25px 15px #ccc",
            zIndex: "4",
            marginBottom: {xs: '20px', md:'none'}
          }}
        >
          <List sx={{ padding: "30px", color: "#ccc" }}>
            <ListHeader color="#fff" textAlign="center">
              Contact Us
            </ListHeader>
            <ListItem disablePadding>
              <LocationOnIcon color="#fff" />
              <ListItemText
                primary="17, happiness street"
                sx={{ paddingLeft: "20px", margin: "10px" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <Email />
              <ListItemText
                primary="hello@berenia.com"
                sx={{ paddingLeft: "20px", margin: "10px" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ContactPhone />
              <ListItemText
                primary="+234 7012 546 109"
                sx={{ paddingLeft: "20px", margin: "10px" }}
              />
            </ListItem>
          </List>
          <ListIconWrapper style={{ padding: "50px" }}>
            <ListIcon iconName="Facebook">
              <Facebook />
            </ListIcon>
            <ListIcon iconName="Instagram">
              <Instagram />
            </ListIcon>
            <ListIcon iconName="LinkedIn">
              <LinkedIn />
            </ListIcon>
            <ListIcon iconName="Twitter">
              <Twitter />
            </ListIcon>
          </ListIconWrapper>
        </Paper>
        <Paper
          style={{
            width: {xs: '100%', lg: "60%"},
            height: "400px",
            position: "relative",
            left: {xs: 'none', md:"-50px"},
          }}
        >
          <Typography
            component="div"
            variant="h4"
            sx={{ textAlign: "center", fontSize: "40px" }}
          >
            Get in Touch
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "97%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Your name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
            />
            <TextField
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
              type='number'
            />
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={2}
                //   value={value}
                //   onChange={handleChange}
                sx={{width: '100%'}}
              />
            </div>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </Paper>
      </Paper>
    </Box>
  );
};

export default Contact;
