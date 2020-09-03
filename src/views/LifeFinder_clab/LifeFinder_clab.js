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
            <h1 className={classes.cardTitleWhite}>Lifefinder, Samsung Venture C-Lab</h1>
            <p className={classes.cardCategoryWhite}>
              samsung venture project search and rescue missing person
            </p>
          </CardHeader>
          <CardBody>
            <p className={classes.description} style={{fontSize:"1.5rem"}}>
              A system that helps rescue teams easily find the missing person in the event of a missing person in a mountainous environment
            </p>
            <img class="fit-picture" src="./assets/techs.png" alt=""/>

            <p className={classes.description} style={{fontSize:"1.5rem"}}>
              Skills : Infrastructure(AWS), GIS server(GeoServer, PostgreSQL), frontend(React), backend(Spring) server
            </p>
{/* 
            <h2>Development sequence</h2>
            <h3>1. Build GIS server</h3>

            <img class="fit-picture" src="./assets/map.png" alt="" style={{width : '800px'}}/>
            <img class="fit-picture" src="./assets/map_satle.png" alt="" style={{width : '800px'}}/> */}
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          {/* <CardBody>
            <Hidden only={["sm", "xs"]}>
              <iframe style={{height : '70vh'}}
                className={classes.iframe}
                src="https://www.yourlifefinder.com"
                title="LifeFinder"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Hidden>
          </CardBody> */}
        </Card>
      </GridItem>
    </GridContainer>
  );
}
