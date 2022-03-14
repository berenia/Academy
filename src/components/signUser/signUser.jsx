import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Style } from "../assets/MUIstyles/signUp";
import SendIcon from "@mui/icons-material/Send";
import SignIn from "./signin";
import SignUp from "./signup";
import BgImage1 from "../static/images/png/signin.png";

import { useState } from "react";

const classes = Style;

const SignUser = () => {
  const [intro, setIntro] = useState({
    header: "Welcome Back",
    text: "It's our pleasure having you here all the time. Let's go",
    buttonText: "Sign in",
    button: true,
  });

  const [inputHeader, setInputHeader] = useState("Sign up");

  const [animation_1, setAnimation_1] = useState({
    animation: "none",
    animationFillMode: "none",
  });

  const [animation_2, setAnimation_2] = useState({
    animation: "none",
    animationFillMode: "none",
  });

  const [animationState, setAnimationState] = useState(false);

  const changeSideText = () => {
    if (!animationState) {
      setIntro({
        header: "Welcome",
        text: " We'll like you to be part of our community.",
        buttonText: "Sign up",
        button: true,
      });
      setInputHeader("Sign in");
      setAnimationState(true);
    }
    else{
      setIntro({
        header: "Welcome Back",
        text: "It's our pleasure having you here all the time. Let's go",
        buttonText: "Sign in",
        button: true,
      });
      setInputHeader("Sign up");
      setAnimationState(false);
    }
  };

  function forwardAnimation() {
    setAnimation_1({
      animation: "right 2s ease-in-out",
      animationFillMode: "forwards",
    });
    setAnimation_2({
      animation: "rRight 2s ease-in-out",
      animationFillMode: "forwards",
    });
    setIntro({
      header: "",
      text: "",
      buttonText: "",
      button: false,
    });
    setTimeout(changeSideText, 1000);
  }

  function BackwardAnimation() {
    setAnimation_1({
      animation: "left 2s ease-in-out",
      animationFillMode: "none",
    });
    setAnimation_2({
      animation: "rLeft 2s ease-in-out",
      animationFillMode: "none",
    });
    setIntro({
      header: "",
      text: "",
      buttonText: "",
      button: false,
    });
    setTimeout(changeSideText, 1000);
  }
  const changeOver = () => {
    {
      animationState === false ? forwardAnimation() : BackwardAnimation();
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${BgImage1})`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: { xs: "10px", md: "40px" },
        paddingTop: { xs: "10px" },
      }}
    >
      <Paper sx={classes.Container}>
        <Paper
          sx={classes.IntroSide}
          style={{
            animation: `${animation_1.animation}`,
            animationFillMode: `${animation_1.animationFillMode}`,
            
          }}
        >
          
          <h2>{intro.header}</h2>
          <p>{intro.text}</p>
          {intro.button === true ? (
            <Button
              variant="outlined"
              sx={classes.switchButton}
              endIcon={<SendIcon />}
              onClick={changeOver}
            >
              {intro.buttonText}
            </Button>
          ) : (
            ""
          )}
        </Paper>

        <Paper
          sx={classes.FormSide}
          elevation={0}
          style={{
            animation: `${animation_2.animation}`,
            animationFillMode: `${animation_2.animationFillMode}`,
          }}
        >
          {animationState === false ? (
            <SignUp text={inputHeader} classes={classes}/>
          ) : (
            <SignIn text={inputHeader} classes={classes}/>
          )}
        </Paper>
      </Paper>
    </Box>
  );
};
export default SignUser;
