import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "rgb(255,89,55)",
    textAlign: "center",
    "@media screen and (max-width: 600px)": {
      marginBottom: "15px",
    },
  },
  footer: {
    fontSize: "22px",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Typography className={classes.footer} variant="footer">
        © 2020 Limitless Technologies - The Entrepreneurship Network
      </Typography>
    </Box>
  );
};

export default Footer;
