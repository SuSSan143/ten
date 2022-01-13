import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px 6px",
    "@media screen and (max-width: 600px)": {
      padding: "30px 6px",
    },
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    border: "8px solid black",
    width: "40%",
  },
  box: { padding: "0 60px" },
  heading: {
    fontFamily: "'noticia text',serif",
    fontSize: "26px",
    textAlign: "center",
    lineHeight: "1.7em",
    letterSpacing: "normal",
  },
  text: {
    textAlign: "center",
    lineHeight: "1.7em",
    fontSize: "16px",
    letterSpacing: "normal",
    fontFamily: "questrial,sans-serif",
  },
  divider: {
    width: "170px",
    height: "3px",
    position: "relative",
    margin: "0px 0px 19px calc((100% - 328px) * 0.5)",
    left: "80px",
    backgroundColor: "black",
  },
}));

const ProvidingCard = (props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} item xs={12} md={4}>
      <CardMedia
        className={classes.image}
        component="img"
        alt="aboutUs"
        image={props.logo}
      />
      <Box>
        <Typography className={classes.heading} variant="h5">
          {props.heading}
        </Typography>
        <Box className={classes.divider} />
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.text} variant="h6">
          {props.text}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ProvidingCard;
