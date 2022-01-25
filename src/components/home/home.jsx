import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Container, Paper, Typography } from "@mui/material";
import headerBackgroundImage from "../static/images/png/header_pic.png";
import homeImage_section_1 from "../static/images/png/home_1.png";

class Home extends React.Component {
  headerImage = () => {
    return (
      <div style={{backgroundImage: `url(' ${headerBackgroundImage}')` , height: '650px'}}>
        <h2>just testing </h2>
      </div>
    );
  };
  container = () => {
    const style = {
      paper: {
        width: "45%",
        textAlign: "center",
        margin: "3%",
        padding: 2,
        display: "flex",
        minHeight: "100px",
        justifyContent: "center",
        alignItems: "center",
      },
      box: {
        display: "flex",
        flexGrow: 1,
      },
    };
    const classes = style;
    return (
      <Container sx={{ bgcolor: "#efefef", fontFamily: 'Georgia' }}>
        <Box sx={classes.box}>
          <Paper sx={classes.paper}>
            <h3>Hi just want it</h3>
          </Paper>
          <Paper sx={classes.paper}>
            <h3>Hi just want it</h3>
          </Paper>
        </Box>
        <Box sx={{ bgcolor: "#fff", mb: '10px'}}>
            <Typography sx={{textAlign: 'center', padding: '10px'}}>
                <h1> <b style={{color:'#1976d2'}}>2022</b> Intensive Offline Bootcamp</h1>
            </Typography>

          {/* <paper sx={{ display: "flex", overflow: "auto" }}> */}
            <img
              src={homeImage_section_1}
              style={{
                width: "45%",
                height: "35%",
                borderRadius: "50%",
                float: "left",
                padding: "10px",
              }}
            />
            <Typography sx={{ padding: "10px" }}>
              <h2>WE ARE RAISING TOP NOTCH DEVELOPERS</h2>
              <p>
                Berenia Academy was birthed to bridge technology gaps with the
                needed knowledge and skill that matches the demand of industries. And to
                improve the quality of locally developed software by raising
                developers that will inculcate globally accepted best practices
                in their software.
              </p>
            </Typography>
          {/* </paper> */}
        </Box>
      </Container>
    );
  };
  render() {
    return (
      <>
        {this.headerImage()} {this.container()}
      </>
    );
  }
}

export default Home;
