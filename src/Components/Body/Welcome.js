import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundSize: "100% 100%",
    backgroundImage:
      "url('https://static.wixstatic.com/media/dcca985fe5e148b1aea6744afd6af686.jpg/v1/fill/w_1363,h_794,al_c,q_85,usm_0.66_1.00_0.01/dcca985fe5e148b1aea6744afd6af686.webp')",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    "@media screen and (max-width: 600px)": {
      backgroundAttachment: "scroll",
    },
  },
  content: {
    textAlign: "center",
    fontFamily: "'Anton', sans-serif",
    letterSpacing: "0.1em",
    fontSize: "90px",
    color: "rgb(232,185,23)",
    fontStyle: "italic",
    lineHeight: "normal",
    textShadow:
      "#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgb(140 140 140 / 50%) 0px 4px 0px, #787878 0px 0px 0px, rgb(0 0 0 / 50%) 0px 5px 10px",
  },
  heading: {
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    fontFamily: "'Cookie', cursive",
    fontStyle: "normal",
    fontSize: "64px",
    fontWeight: "bold",
    color: "rgb(255,89,55)",
    textShadow:
      "#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgb(140 140 140 / 50%) 0px 4px 0px, #787878 0px 0px 0px, rgb(0 0 0 / 50%) 0px 5px 10px",
  },
  container: {
    padding: "30px 0 130px",
    margin: "30px 0 30px",
  },
  buttonContainer: {
    textAlign: "center",
  },
  button: {
    borderRadius: "25px",
    top: "100px",
    background:
      "linear-gradient(229deg, #ff4f4f 0%, rgba(29, 44, 243, 0) 100%), #1D2CF3",
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      backgroundColor: "#ff4f4f",
    },
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box className={classes.container}>
        <Typography className={classes.heading} variant="h3">
          Welcome to
        </Typography>
        <Typography className={classes.content} variant="h1">
          THE NEXT BIG THING
        </Typography>
        <Box className={classes.buttonContainer}>
          <Button href="https://discord.gg/A8zBusy" className={classes.button}>
            Join TEN Virtual Campus
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
