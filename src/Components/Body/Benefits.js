import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import withWidth from "@material-ui/core/withWidth";
import Fade from "react-reveal/Fade";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  top: {
    clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
    height: "45px",
    backgroundColor: "black",
    margin: "0px 6%",
    "@media screen and (max-width: 600px)": {
      clipPath: "polygon(0 0, 100% 0, 96% 75%, 4% 75%)",
      margin: "20px 6% -25px",
    },
  },
  box: {
    transform: "translate(0, -135%)",
    left: "37%",
    position: "absolute",
    fontSize: "46px",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "white",
    zIndex: 2,
    "@media screen and (max-width: 600px)": {
      left: "22%",
      fontSize: "30px",
      transform: "translate(0, -110%)",
    },
  },
  bottom: {
    clipPath: "polygon(4% -1%, 96% -1%, 100% 100%, 0% 100%)",
    height: "45px",
    backgroundColor: "black",
    margin: "0px 6%",
    "@media screen and (max-width: 600px)": {
      clipPath: "polygon(4% 25%, 96% 25%, 100% 100%, 0% 100%)",
      margin: "-10px 6%",
    },
  },
}));

const Benefits = (props) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);
  const classes = useStyles();

  const mobileBenefitContent = (
    <Fade bottom when={fade}>
      <Box className={classes.box}>Our Course Benefits</Box>
    </Fade>
  );

  const benefitContent = <Box className={classes.box}>Our Course Benefits</Box>;

  return (
    <Box>
      <Box className={classes.top} />

      <Box className={classes.bottom} />
      {props.width === "xs" || props.width === "sm"
        ? mobileBenefitContent
        : benefitContent}
    </Box>
  );
};

export default withWidth()(Benefits);
