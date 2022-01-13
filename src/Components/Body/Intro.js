import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";

// import "url('https://fonts.googleapis.com/css2?family=Noticia+Text&display=swap')";

const useStyles = makeStyles((theme) => ({
  intro: {
    margin: "10px 0 30px",
  },
  text: {
    fontFamily: '"Noticia Text", serif',
    fontSize: "65px",
    position: "absolute",
    bottom: "-100px",
    padding: "0 310px",
    color: "rgba(255,230,143)",
    textShadow: "rgb(0 0 0 / 40%) 0px 4px 5px",
    fontWeight: "bold",
    letterSpacing: "-0.02em",
    textAlign: "center",
    width: "auto",
    height: "auto",
    "@media screen and (max-width: 600px)": {
      padding: "0 35px",
      left: "35px",
      fontSize: "35px",
      bottom: "80px",
      color: "white",
      width: "80%",
    },
  },
}));

const Intro = () => {
  const classes = useStyles();

  return (
    <Box className={classes.intro}>
      <CardMedia
        className={classes.video}
        component="img"
        alt="aboutUs"
        image="https://static.wixstatic.com/media/44a6c2_b456634292f844e7b822bb94dcd431fd~mv2.jpg/v1/fill/w_1699,h_784,al_c,q_85,usm_0.66_1.00_0.01/44a6c2_b456634292f844e7b822bb94dcd431fd~mv2.webp"
      />
      <Typography className={classes.text} variant="h2">
        A World of Knowledge at Your Fingertips
      </Typography>
    </Box>
  );
};

export default Intro;
