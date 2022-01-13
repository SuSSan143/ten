import React from "react";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  divider: {
    width: "170px",
    height: "3px",
    position: "relative",
    margin: "-12px 0px 19px calc((100% - 328px) * 0.5)",
    left: "80px",
    backgroundColor: "black",
  },
  heading: {
    textAlign: "center",
    color: "#E21C21",
    fontSize: "51px",
    fontFamily: "questrial,sans-serif",
  },
}));

const TestimonialHeader = () => {
  const classes = useStyles();

  return (
    <Hidden mdDown>
      <Typography className={classes.heading} variant="h5">
        Testimonials
      </Typography>
      <Box className={classes.divider} />
    </Hidden>
  );
};

export default TestimonialHeader;
