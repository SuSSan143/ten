import React from "react";
import Intro from "./Intro";
import AboutUs from "./AboutUs";
import Welcome from "./Welcome";
import Content from "./Content";
import Benefits from "./Benefits";
import Providing from "./Providing";
import Testimonial from "./Testimonial";
import Video from "./VideoContent";
import TestimonialHeader from "./TestimonialHeader";
import Form from "./Form";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "20px 85px",
    "@media screen and (max-width: 600px)": {
      padding: "70px 0 15px",
    },
  },
}));

const Body = () => {
  const classes = useStyles();

  return (
    <Box className={classes.body}>
      <Intro />
      <AboutUs />
      <Welcome />
      <Content />
      <Benefits />
      <Providing />
      <TestimonialHeader />
      <Testimonial />
      <Video />
      <Form />
    </Box>
  );
};

export default Body;
