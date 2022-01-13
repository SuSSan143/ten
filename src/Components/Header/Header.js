/* eslint-disable no-unused-vars */
import React from "react";
import SearchBar from "./SearchBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  heading: {
    paddingLeft: "30%",
    color: "#E81038",
    fontStyle: "italic",
    textShadow:
      "rgb(0 0 0 / 50%) -1px -1px 0px, rgb(0 0 0 / 50%) -1px 1px 0px, rgb(0 0 0 / 50%) 1px 1px 0px, rgb(0 0 0 / 50%) 1px -1px 0px",
    "@media screen and (max-width: 600px)": {
      fontSize: "2rem",
      position: "relative",
      textAlign: "center",
      left: "30px",
    },
    "& span": {
      color: "black",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={8}>
        <Link
          className={classes.link}
          href="https://www.entrepreneurshipnetwork.net"
          onClick={(event) => event.preventDefault()}
        >
          <Typography className={classes.heading} variant="h3">
            <span>T</span>he
            <br />
            <span>E</span>ntrepreneurship
            <br />
            <span>N</span>etwork
          </Typography>
        </Link>
        <Navbar />
      </Grid>
      <SearchBar />
    </Grid>
  );
};

export default Header;
