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
              samsung venture project, searching and rescuing missing people
            </p>
          </CardHeader>
          <CardBody>
            <p className={classes.description} style={{fontSize:"1.5rem"}}>
              Lifefinder service helps rescue teams to find missing people in a mountainous environment based on GIS
            </p>
            <br/><br/>
            <img class="fit-picture" src="./assets/lifefinder_logo.png" alt=""/>
            <br/><br/>
            <p className={classes.description} style={{fontSize:"1.5rem"}}>
              Skills : GIS server(GeoServer, PostgreSQL), frontend(React), 3d graphic(Three.js)
            </p>

            <br/><br/><br/>
            <h2 style={{fontWeight:"800"}}>Strength Point</h2>
            <h3 style={{fontWeight:"800"}}>1. Build GIS server, AWS infra structure</h3>
            <h4>Build a database server specialized for storage of geographic data<br/>Build AWS infrastructure to handle large amounts of traffic</h4>
            <img class="fit-picture" src="./assets/techs.png" alt=""/>
            <br/><br/>
            <h3 style={{fontWeight:"800"}}>2. Implement frontend server</h3>
            <h4>Building a modern React.js frontend server for smooth traffic handling<br/>Rest api-based server construction for distributed processing and horizontal scaling</h4>
            <img class="fit-picture" src="./assets/main_page.png" alt="" style={{width:"100%"}}/>
            <h6>* hexagon : area in which rescue teams searched<br/>* polygon : area in which rescue teams are assigned to rescue</h6>
            <br/><br/>
            <h3 style={{fontWeight:"800"}}>3. Transform 2D satellite to 3D terrain</h3>
            <h4>Transform 2D satellite map to 3D terrain map with DEM data and satellite texture<br/>Provides smooth service by introducing the latest 3D processing technology</h4>
            <img class="fit-picture" src="./assets/map_2d.png" alt="" style={{width:"100%"}}/>
            <img class="fit-picture" src="./assets/map_3d.png" alt="" style={{width:"100%"}}/>

            <h3 style={{fontWeight:"800"}}>In progress(~2020.12.31)</h3>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
