import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Muted from "components/Typography/Muted.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
    fontWeight: "500",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "700",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function Qualifications() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h1 className={classes.cardTitleWhite}>Portfolio</h1>
              <h3 className={classes.cardTitleWhite}>in progress ...</h3>
            </CardHeader>
            <CardBody>
              {/* <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Success fontSize='2.5rem'>
                    Lifefinder C-Lab
                  </Success>
                  <Muted fontSize='18px'>
                    Mass user,traffic gis(geographic information system)
                  </Muted>
                  <Muted fontSize='18px'>
                    helpful for professional rescue rangers to search and rescue missing people in moutain
                  </Muted>
                  <Muted fontSize='18px'>
                    I currently working on (2020.4 ~ 2020.12)
                  </Muted>
                </GridItem>
              </GridContainer> */}
              <GridContainer spacing={3}>
                <GridItem xs={12} sm={12} md={12}>
                    <Success fontSize='2.5rem'>
                      3D Terrain Canvas
                    </Success>
                    <Muted fontSize='18px'>
                      3D Terrain canvas demo web app on which you can draw 3D Terrain easily
                    </Muted>
                    <Muted fontSize='18px'>
                      implemented with React, WebGl(Three library)
                    </Muted>
                  </GridItem>
                </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <div style={{position : 'absolute', top : '90%'}}>
        <Warning fontSize='2rem'>
          More details
        </Warning>
        <Muted fontSize='2rem'>
          <a href='https://github.com/HappyJoseph'>https://github.com/HappyJoseph</a>
        </Muted>
      </div>
    </div>
  );
}
