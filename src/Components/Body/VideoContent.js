import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FuturaLT from "../../fonts/FuturaLT-Book.ttf";
import withWidth from "@material-ui/core/withWidth";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
} from "@material-ui/core";

const futuraLt = {
  fontFamily: "FuturaLT",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Futura'),
    local('Futura-Regular'),
    url(${FuturaLT}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createMuiTheme({
  typography: {
    fontFamily: '"FuturaLT", sarif',
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [futuraLt],
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  box: {
    margin: "30px 0 15px",
  },
  text: {
    position: "relative",
    bottom: "30px",
    fontStyle: "normal",
    fontSize: "64px",
    fontWeight: "normal",
    textShadow:
      "#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgb(140 140 140 / 50%) 0px 4px 0px, #787878 0px 0px 0px, rgb(0 0 0 / 50%) 0px 5px 10px",
    "@media screen and (max-width: 600px)": {
      fontSize: "45px",
    },
  },
  container: {
    transform: "translate(44%, -130%)",
    textAlign: "center",
    position: "absolute",
    zIndex: 3,
    color: "white",
    "@media screen and (max-width: 600px)": {
      transform: "translate(0, -112%)",
    },
    // bottom: "170px",
  },
  videoContainer: {
    display: "block",
    overflow: "hidden",
    height: "400px",
    "@media screen and (max-width: 600px)": {
      height: "100%",
    },
  },
  video: {
    position: "relative",
    bottom: "200px",
    "@media screen and (max-width: 600px)": {
      bottom: "0",
    },
  },
  buttonContainer: {
    textAlign: "center",
  },
  button: {
    // position: "relative",
    top: "25",
    padding: "10px 20px",
    backgroundColor: "#E21C21",
    color: "#FFFFFF",
    cursor: "pointer",
    textTransform: "none",
    textShadow: "1.43px 3.73px 3px #a6a6a6",
    fontSize: "19px",
    fontFamily: '"FuturaLT", sarif',
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      border: "2px solid black",
      "& .MuiButton-label": {
        transform: "scaleX(1.2)",
      },
    },
  },
}));

const VideoContent = (props) => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.box}>
        <Box className={classes.videoContainer}>
          <CardMedia
            className={classes.video}
            component="video"
            alt="aboutUs"
            src="https://video.wixstatic.com/video/11062b_79271b7012564ed497d2774a895ab7fd/1080p/mp4/file.mp4"
            autoPlay
            muted={(props.width === "xs" || props.width === "sm") && false}
            loop
          />
        </Box>
        <Box className={classes.container}>
          <Box className={classes.buttonContainer}>
            <Typography className={classes.text} variant="h3">
              Power of TEN Consulting
            </Typography>
            <Button
              href="https://www.consulting.entrepreneurshipnetwork.net/"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Explore Here
              <ArrowForwardIosIcon fontSize="small" />
            </Button>
          </Box>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
};

export default withWidth()(VideoContent);
