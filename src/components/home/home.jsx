import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Container,
  Grid,
  Hidden,
  Paper,
  Typography,
} from "@mui/material";
import homeImage_section_1 from "../static/images/png/home_2.png";
import BackgroundIllustrator from "../static/images/png/home_1.svg";
// import { ButtonBC } from "../assets/styleComponents/customStyles";
import { Homestyle } from "../assets/MUIstyles/customStyles";
import courseCard from "../courseCard";

class Home extends React.Component {

  handleCloseNavMenu = () => {};
    
  courseCard = (props) => {
      return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
    
  }
  headerImage = () => {
    const classes = Homestyle;
    return (
      <div
        style={classes.backgroundImg}
      >
        <Box sx={classes.textArea}>
          <h1>For excellence and productivity</h1>
          <p>
            Join our intensive offline Bootcamp program, starting 10 March,
            2022.Grab your opportunity now!!!
          </p>
          <Button
            key="apply now"
            onClick={this.handleCloseNavMenu}
            sx={classes.defaultButton}
            variant="outlined"
          >
            Apply NOw
          </Button>
          {/* <ButtonBC
            buttonLabel ='my button'
            backgroundColor = '#197aff'
          >
            {" "}
          </ButtonBC> */}
        </Box>

        <div
          style={classes.illustratorDiv}
        >
          <img
            src={BackgroundIllustrator}
            alt="illustrator here"
            style={classes.illustratorImg}
          />
        </div>
      </div>
    );
  };
  // page layout container
  container = () => {
    
    const classes = Homestyle;
    return (
      <Container
        sx={{ bgcolor: "#efefef", fontFamily: "Georgia" }}
        maxWidth="xl"
        disableGutters="false"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper sx={classes.paper}>
              <Typography>
                <h1>Become a Developer?</h1>
                <p>Full-stack development Bootcamp</p>
                <Button
                  key="apply now"
                  onClick={this.handleCloseNavMenu}
                  sx={classes.defaultButton}
                  variant="outlined"
                >
                  Apply NOw
                </Button>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper sx={classes.paper}>
              <Typography>
                <h1> Office Software Skill?</h1>
                <p>Complete Office software package</p>
                <Button
                  key="apply now"
                  onClick={this.handleCloseNavMenu}
                  sx={classes.defaultButton}
                  variant="outlined"
                >
                  Apply NOw
                </Button>
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={2} bgcolor={"white"}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ textAlign: "center", padding: "0px", display: "inline" }}
            >
              <h1>
                <b style={{ color: "#1976d2" }}>2022</b> Intensive Offline
                Bootcamp
              </h1>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={homeImage_section_1}
              style={{
                borderRadius: "50%",
                width: "500px",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h6"
              Wrap
              component="div"
              sx={{ padding: "10px" }}
            >
              <h2>WE ARE RAISING TOP NOTCH DEVELOPERS</h2>
              <p>
                Berenia Academy was birthed to bridge technology gaps with the
                needed knowledge and skill that matches the demand of
                industries. And to improve the quality of locally developed
                software by raising developers that will inculcate globally
                accepted best practices in their software.
              </p>
            </Typography>
          </Grid>
        </Grid>

        <Box sx={classes.applicationSection}>
          <Paper sx={classes.applicationOverlay}>
            <Typography>
              <h1>
                Application for our Offline Bootcamp starting 10th March, 2022
                is now open
              </h1>
            </Typography>

            <Button
              key="apply now"
              onClick={this.handleCloseNavMenu}
              sx={classes.defaultButton}
              variant="outlined"
            >
              Apply NOw
            </Button>
          </Paper>
        </Box>
        <Grid>
              <Grid item ></Grid>
        </Grid>
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
