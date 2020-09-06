/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader plain color="primary">
            <h1 className={classes.cardTitleWhite}>3D Terrain Canvas</h1>
            <p className={classes.cardCategoryWhite}>
              Music Looper demo web app
            </p>
          </CardHeader>
          <CardBody>
            <p className={classes.description} style={{fontSize:"1.5rem"}}>
              Music Looper demo web app witch you can make and play your own music 
            </p>
            <p className={classes.description} style={{fontSize:"1.5rem"}}>
              Skills : React, Webgl(Three Library)
            </p>
            <h3><a href="https://d2wu49jed8fvc9.cloudfront.net/" target="_blank">Demo Link</a></h3>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardBody>
            <Hidden only={["sm", "xs"]}>
              <iframe style={{height : '70vh'}}
                className={classes.iframe}
                src="https://d2wu49jed8fvc9.cloudfront.net/"
                title="Music Looper"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Hidden>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
