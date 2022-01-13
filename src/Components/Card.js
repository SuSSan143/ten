import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export default function Class(props) {
  const useStyles = makeStyles((theme) => ({
    entrepreneurship: {
      padding: props.p,
      backgroundColor: "rgb(216, 5, 63)",
      height: "100%",
    },
    title: {
      fontSize: "34px",
      textAlign: "center",
      lineHeight: "normal",
      letterSpacing: "normal",
      color: "rgb(255, 255, 255)",
      fontFamily: props.ff,
    },
    buttonContainer: {
      textAlign: "center",
    },
    button: {
      padding: "15px 30px",
      top: "100px",
      borderRadius: "50px",
      textTransform: "none",
      backgroundColor: "black",
      color: "rgb(255, 255, 255)",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "20px",
      fontFamily:
        "helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif",
      "&:hover": {
        backgroundColor: "#ff4f4f",
      },
      "@media screen and (max-width: 600px)": {
        padding: "10px 40px",
        top: "35px",
      },
    },
  }));
  const classes = useStyles();

  return (
    <Grid
      className={classes.entrepreneurship}
      direction="column"
      justifyContent="center"
      alignItems="center"
      item
      xs={12}
      md={props.md}
    >
      <Typography className={classes.title} variant="h3">
        {props.title}
      </Typography>
      <Box className={classes.buttonContainer}>
        <Button
          href={props.href}
          variant="contained"
          className={classes.button}
        >
          Explore Here
        </Button>
      </Box>
    </Grid>
  );
}
