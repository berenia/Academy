import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Drawer, Divider, Toolbar, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import About from "./about";
import styled from "styled-components";
import {
  MenuBookRounded,
  LibraryBooksRounded,
  PhoneRounded,
  CreditCardRounded,
  NotificationsRounded,
  InfoRounded,
  RecentActorsRounded,
  DynamicFeedRounded
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const active = styled.div`
  bgcolor: blue;
  color: White;
`;

const menuItems = [
  { name: "Courses", icon: <MenuBookRounded />, link: "/completed" },
  { name: "Personal Information", icon: <RecentActorsRounded />, link: "/personal" },
  { name: "Course Material", icon: <LibraryBooksRounded />, link: "/" },
  { name: "Tutor's Desk", icon: <DynamicFeedRounded />, link: "/tutordesk" },
  { name: "Notifications", icon: <NotificationsRounded />, link: "/notifications" },
  { name: "Contact Tutor", icon: <PhoneRounded />, link: "/tutorcontact" },
  { name: "Payment Details", icon: <CreditCardRounded />, link: "/" }
];

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Box sx={{ bgcolor: "#fff", boxShadow: 3 }}>
        <Box sx={{ width: "100%%" }}>
          <About />
        </Box>
        <Box>
          <Drawer
            variant="persistent"
            anchor="left"
            open
            sx={{
              width: 160,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                fontWeight: "bold",
                width: { lg: 250, sm: 190, xs: 70 },
                boxSizing: "border-box"
              }
            }}
          >
            <Toolbar />
            <Divider />
            <List>
              {menuItems.map(text => (
                <Link to={text.link}>
                  <ListItem
                    sx={{ bgcolor: "#eee", m: 1 }}
                    button
                    key={text.name}
                    //onClick={() => navigate(text.link)}
                    className={location.pathname === text.link ? active : null}
                    title={text.name}
                  >
                    <ListItemIcon>{text.icon}</ListItemIcon>
                    <ListItemText sx={{ color: "black", fontWeight: "bold" }}>{text.name}</ListItemText>

                    <Toolbar />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
        </Box>
      </Box>
    </>
  );
}
