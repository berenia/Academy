import React from "react";
import { Grid, item, Typography } from "@mui/material";
import {
  Business,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";
import {
  List,
  ListHeader,
  ListIcon,
  ListIconWrapper,
  ListText,
} from "./assets/Berenia/List";

const FooterHeads = [
  "Follow Us",
  "company",
  "work with us",
  "Discover",
  "For business",
];
const FollowUs = ["Facebook", "Instagram", "LinkedIn", "Twitter"];
const company = ["About", "Courses", "Terms and Condition", "Policy"];
const WorkWithUs = ["Become an instructor", "Blog as guest", "Join us as Developer"];
const Discover = ["Skillup", "Resources", "Dreams"];
const ForBusiness = [
  "Corporate training",
  "Partner with us",
  "Empowerment program",
];

function Footer() {
  return (
    <Grid
      container
      spacing={1}
      bgcolor={"#363535"}
      color={"#eee"}
      pl={3}
      sx={{ justifyContent: "center", alignItems: "space-around" }}
    >
      <Grid item xs={12} sm={6} md={2.4} sx={{ justifyContent: "center" }}>
        <List>
          <ListHeader fontSize="20px">Follow Us</ListHeader>
          <ListIconWrapper>
            {FollowUs.map((data) => (
              <ListIcon iconName={data} key={data}>
                {data == "Facebook" ? <Facebook /> : ""}
                {data == "Instagram" ? <Instagram /> : ""}
                {data == "Twitter" ? <Twitter /> : ""}
                {data == "LinkedIn" ? <LinkedIn /> : ""}
              </ListIcon>
            ))}
          </ListIconWrapper>
        </List>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4} sx={{ justifyContent: "center" }}>
        <List>
          <ListHeader fontSize="20px">Company</ListHeader>

          {company.map((data) => (
            <ListText color="#aaa" key={data}>{data}</ListText>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <List>
          <ListHeader fontSize="20px">Work with Us</ListHeader>
          {WorkWithUs.map((data) => (
            <ListText color="#aaa" key={data}>{data}</ListText>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <List>
          <ListHeader fontSize="20px">Discover</ListHeader>

          {Discover.map((data) => (
            <ListText color="#aaa" key={data}>{data}</ListText>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <List>
          <ListHeader fontSize="20px">Business</ListHeader>
          {ForBusiness.map((data) => (
            <ListText color="#aaa" key={data}>{data}</ListText>
          ))}
        </List>
      </Grid>
      <Grid item sm={12} sx={{ textAlign: "center", padding: 2 }}>
        Copywrite @ 2022 Berenia Technology
      </Grid>
    </Grid>
  );
}

export default Footer;
