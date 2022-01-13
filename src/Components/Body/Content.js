import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import withWidth from "@material-ui/core/withWidth";
import Card from "../Card";
import content from "./Images/ezgif.com-gif-maker (1).jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    "@media screen and (max-width: 600px)": {
      position: "relative",
      zIndex: 3,
      bottom: "78%",
    },
  },
  product: {
    "@media screen and (max-width: 600px)": {
      position: "relative",
      zIndex: 3,
      bottom: "78%",
    },
  },
  content: {
    "@media screen and (max-width: 600px)": {
      position: "relative",
      bottom: "52%",
    },
  },
}));

const Content = (props) => {
  console.log(props.width);
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Grid container>
        <Grid
          container
          item
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={8}>
            <CardMedia
              component="img"
              alt="aboutUs"
              image="https://static.wixstatic.com/media/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.jpg/v1/fill/w_1138,h_590,al_c,q_85,usm_0.66_1.00_0.01/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.webp"
            />
          </Grid>
          <Card
            href="https://www.entrepreneurshipnetwork.net/product-page/entrepreneurship"
            title="Entrepreneurship made fun"
            md="4"
            p="70px 94px"
            l="30px"
          />
        </Grid>
        <Grid
          container
          item
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6}>
            <CardMedia
              component="img"
              alt="aboutUs"
              image={
                props.width === ("sm" || "xs")
                  ? "https://static.wixstatic.com/media/11062b_557462ab123440368447ab18a66043e5~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01/11062b_557462ab123440368447ab18a66043e5~mv2.webp"
                  : "https://static.wixstatic.com/media/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.jpg/v1/fill/w_850,h_563,al_c,q_85,usm_0.66_1.00_0.01/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.webp"
              }
            />
          </Grid>
          <Card
            href="https://www.entrepreneurshipnetwork.net/product-page/digital-marketing-1"
            title="Digital Marketing"
            md="3"
            p="70px 45px"
            ff='"Noticia Text", serif'
            l="30px"
          />
          <Grid className={classes.image} item xs={12} md={3}>
            <CardMedia
              component="img"
              alt="aboutUs"
              image="https://static.wixstatic.com/media/11062b_557462ab123440368447ab18a66043e5~mv2.jpg/v1/fill/w_425,h_563,al_c,q_80,usm_0.66_1.00_0.01/11062b_557462ab123440368447ab18a66043e5~mv2.webp"
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            className={classes.product}
            href="https://www.entrepreneurshipnetwork.net/product-page/product-management-1"
            title="Product Management like a pro"
            md="6"
            p={
              props.width === "xs" || props.width === "sm"
                ? "70px 38px"
                : "70px 150px"
            }
            ff='"Noticia Text", serif'
            l="95px"
          />
          <Grid className={classes.content} item md={6}>
            <CardMedia component="img" alt="aboutUs" image={content} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withWidth()(Content);
