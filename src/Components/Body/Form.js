import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import withWidth from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Fb from "./Images/fb.jpg";
import Twitter from "./Images/twitter.jpg";
import Insta from "./Images/insta.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 130px",
    transform: "translate(-5%, 0)",
    "@media screen and (max-width: 600px)": {
      padding: "0 40px",
      transform: "translate(0, 0)",
    },
  },
  imageLinksContainer: {
    display: "flex",
    "@media screen and (max-width: 600px)": {
      paddingBottom: "15px",
    },
  },
  imageLink: {
    padding: "0 10px",
  },
  linksContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "15px",
  },
  logo: { width: "80%" },
  heading: {
    textAlign: "center",
    paddingBottom: "10px",
  },
  link: {
    textShadow: "rgb(0 0 0 / 40%) 0px 4px 5px",
    letterSpacing: "0.05em",
    lineHeight: "1.7em",
    textDecoration: "none",
    fontSize: "23px",
    color: "black",
    fontFamily: "questrial,sans-serif",
    "&:hover": {
      textDecoration: "none",
      color: "black",
    },
  },
  label: {
    fontStyle: "italic",
    fontSize: "16px",
    "@media screen and (max-width: 600px)": {
      fontSize: "1.5rem",
    },
  },
  button: {
    backgroundColor: "white",
    borderColor: "black",
    textDecoration: "none",
  },
  buttonContainer: {
    textAlign: "center",
  },
  textField: {
    padding: "5px 0",
  },
}));

const Form = (props) => {
  const [checker, setChecker] = useState(true);
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.heading} variant="h6">
        Subscribe to our newsletter
      </Typography>
      <Grid
        className={classes.container}
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid className={classes.imageLinksContainer}>
          <Link
            className={classes.imageLink}
            href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/"
            onClick={(event) => event.preventDefault()}
          >
            <CardMedia
              className={classes.logo}
              component="img"
              alt="aboutUs"
              image={Fb}
            />
          </Link>
          <Link
            className={classes.imageLink}
            href="https://twitter.com/We_Are_TEN?s=08"
            onClick={(event) => event.preventDefault()}
          >
            <CardMedia
              className={classes.logo}
              component="img"
              alt="aboutUs"
              image={Twitter}
            />
          </Link>
          <Link
            className={classes.imageLink}
            href="https://www.instagram.com/theentrepreneurshipnetwork/"
            onClick={(event) => event.preventDefault()}
          >
            <CardMedia
              className={classes.logo}
              component="img"
              alt="aboutUs"
              image={Insta}
            />
          </Link>
        </Grid>
        <FormControl>
          <Grid container direction="column">
            <Grid justifyContent="space-evenly" item direction="row">
              <TextField
                className={classes.textField}
                fullWidth={
                  (props.width === "xs" || props.width === "sm") && true
                }
                label="Full Name"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                fullWidth={
                  (props.width === "xs" || props.width === "sm") && true
                }
                label="College Name."
                variant="outlined"
              />
            </Grid>
            <Grid item direction="row">
              <TextField
                className={classes.textField}
                fullWidth={
                  (props.width === "xs" || props.width === "sm") && true
                }
                label="Mobile No."
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                fullWidth={
                  (props.width === "xs" || props.width === "sm") && true
                }
                label="Email"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <FormControlLabel
            className={classes.label}
            control={
              <Checkbox
                checked={checker}
                onChange={() => setChecker((preValue) => !preValue)}
                name="community"
              />
            }
            label="Join TEN's Discord Community"
          />
          <Box className={classes.buttonContainer}>
            <Button variant="outlined" className={classes.button}>
              Submit
            </Button>
          </Box>
        </FormControl>
        <Grid className={classes.linksContainer}>
          <Link
            className={classes.link}
            href="https://www.entrepreneurshipnetwork.net/about"
            onClick={(event) => event.preventDefault()}
          >
            About US
          </Link>
          <Link
            className={classes.link}
            href="https://www.entrepreneurshipnetwork.net/contact"
            onClick={(event) => event.preventDefault()}
          >
            FAQ's
          </Link>
          <Link
            className={classes.link}
            href="https://www.entrepreneurshipnetwork.net/contact"
            onClick={(event) => event.preventDefault()}
          >
            Contact Us
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withWidth()(Form);
