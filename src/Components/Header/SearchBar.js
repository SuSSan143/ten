import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  box: {
    "@media screen and (min-width: 1200px)": {
      position: "relative",
      bottom: 30,
      right: 20,
    },
    "@media screen and (max-width: 1224px)": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  root: {
    display: "flex",
    alignItems: "center",
    width: "400px",
    borderRadius: "30px",
    backgroundColor: "black",
    "&:hover": {
      background: "#FFEFD5",
      "& svg": {
        color: "black",
      },
    },
    "& input::placeholder": {
      color: "white",
    },
    "@media screen and (max-width: 600px)": {
      width: "470px",
      height: "50px",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  icon: {
    color: "white",
    padding: 10,
    fontSize: 40,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  cart: {
    margin: theme.spacing(1),
    color: "red",
    backgroundColor: "red",
    "& svg": {
      padding: "0 0 0 3px",
      color: "black",
    },
    "&:hover": {
      backgroundColor: "black",
      "& svg": {
        color: "white",
      },
    },
    borderRadius: "30px",
    padding: "10px 45px",
  },
  startICon: { margin: 0 },
  loginButton: {
    margin: theme.spacing(1),
  },
  login: {
    border: "1px solid black",
    padding: "10px 20px",
    textTransform: "none",
    boxShadow: "-0.73px 0.68px 4px 0px rgba(0,0,0,0.6)",
  },
  container: {
    margin: "5px 0",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    "@media screen and (max-width: 600px)": {
      flexDirection: "column-reverse",
    },
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Grid container className={classes.container}>
        <Button
          href="https://www.entrepreneurshipnetwork.net/cart-page"
          variant="contained"
          className={classes.cart}
          classes={{ startIcon: classes.startICon }}
          startIcon={<ShoppingCartOutlinedIcon style={{ fontSize: 25 }} />}
        />
        <Box className={classes.loginButton} boxShadow={3}>
          <Button
            variant="outlined"
            className={classes.login}
            startIcon={<AccountCircleIcon style={{ fontSize: 25 }} />}
          >
            Log in
          </Button>
        </Box>
      </Grid>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search here..."
          inputProps={{ "aria-label": "Search here..." }}
        />
        <SearchIcon className={classes.icon} />
      </Paper>
    </Box>
  );
}
