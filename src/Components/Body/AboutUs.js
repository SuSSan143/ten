import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import aboutUs from "./Images/ezgif.com-gif-maker.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aboutUs: { backgroundColor: "#ff4040", padding: "10px 50px" },
  content: {
    padding: "45px 141px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
      padding: "20px 0 45px",
    },
  },
  text: {
    padding: "0 50px",
    width: "auto",
    fontSize: "42px",
    lineHeight: "1.2em",
    textAlign: "center",
    textShadow:
      "rgb(255 255 255 / 60%) 1px 1px 1px, rgb(0 0 0 / 60%) -1px -1px 1px",
    color: "#000000",
    fontWeight: "bold",
    letterSpacing: "0.05em",
    fontFamily: "questrial,sans-serif",
    "@media screen and (max-width: 600px)": {
      padding: "0 25px 10px",
      fontSize: "36px",
    },
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "10px",
  },
  image: {
    border: "2px solid black",
    borderRadius: "5px 2px",
    width: "441px",
    height: "296px",
    objectFit: "cover",
    objectPosition: "50% 50%",
  },
  button: {
    paddingLeft: "40px",
    paddingRight: "40px",
    textTransform: "none",
    backgroundColor: "white",
    color: "black",
    border: "2px solid black",
    fontFamily: "'Questrial', sans-serif",
    letterSpacing: "0.1px",
    fontWeight: 700,
    fontSize: "20px",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 20%)",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
      border: "2px solid white",
    },
  },
  box: {
    "@media screen and (max-width: 600px)": {
      padding: "0 0 30px",
    },
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  return (
    <Box className={classes.aboutUs}>
      <Typography className={classes.heading} variant="h4">
        About Us
      </Typography>
      <Grid className={classes.content} item>
        <Box className={classes.box}>
          <Typography className={classes.text} variant="h3">
            Learning Together From the Comfort of Your Home
          </Typography>
          <Button
            href="https://www.entrepreneurshipnetwork.net/about"
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Learn More
          </Button>
        </Box>
        <CardMedia
          className={classes.image}
          component="img"
          alt="aboutUs"
          image={aboutUs}
        />
      </Grid>
    </Box>
  );
};

export default AboutUs;
