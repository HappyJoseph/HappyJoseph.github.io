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
          <CardBody>
            <h2 className={classes.cardTitle}>Life Finder</h2>
            
            <p className={classes.description} style={{fontSize:"1.5rem"}}>
              a skilled professional who codes, tests, debugs, and 
              maintains the comprehensive instructions known as computer programs 
              that devices should follow to execute their functions
            </p>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h1 className={classes.cardTitleWhite}>Lifefinder, Samsung Venture C-Lab</h1>
            <p className={classes.cardCategoryWhite}>
              samsung venture project search and rescue missing person
            </p>
          </CardHeader>
          <CardBody>
            <Hidden only={["sm", "xs"]}>
              <iframe
                className={classes.iframe}
                src="https://www.yourlifefinder.com"
                title="LifeFinder"
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
