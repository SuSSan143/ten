import React from "react";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Carousel from "react-material-ui-carousel";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  box: {
    position: "absolute",
    color: "white",
    right: "50px",
    padding: "150px 262px",
    left: "20px",
    textAlign: "center",
    fontSize: "26px",
    fontWeight: "bold",
  },
  message: {
    fontFamily: "'noticia text',serif",
  },
  by: {
    top: "40px",
    position: "relative",
    left: "100px",
    fontFamily: "'noticia text',serif",
  },
}));

const items = [
  {
    message:
      "Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.",
    by: "-Harsh Rajput, General Management Intern",
  },
  {
    message:
      "TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.",
    by: "-Anjali Srivastava, Content Intern",
  },
  {
    message:
      "I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.",
    by: "-Kshema Unni, Business Development Intern",
  },
  {
    message:
      "Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!",
    by: "-Aakriti Malik, DM Intern",
  },
];

const Testimonial = () => {
  const classes = useStyles();

  function Slide(props) {
    return (
      <Box>
        <Paper elevation={0} onSubmit={(e) => e.preventDefault()}>
          <Box className={classes.box}>
            <Typography className={classes.message} variant="h5">
              {props.item.message}
            </Typography>
            <Typography className={classes.by} variant="h5">
              {props.item.by}
            </Typography>
          </Box>
          <CardMedia
            className={classes.image}
            component="img"
            alt="aboutUs"
            image="https://static.wixstatic.com/media/11062b_558f00357585424e894fb7c595fc38fd~mv2.jpg/v1/fill/w_1520,h_620,al_c,q_85,usm_0.66_1.00_0.01/11062b_558f00357585424e894fb7c595fc38fd~mv2.webp"
          />
        </Paper>
      </Box>
    );
  }

  return (
    <Hidden mdDown>
      <Carousel
        animation="slide"
        autoPlay={true}
        timeout="500"
        navButtonsAlwaysVisible={true}
      >
        {items.map((item, index) => {
          return <Slide item={item} key={index} />;
        })}
      </Carousel>
    </Hidden>
  );
};

export default Testimonial;
