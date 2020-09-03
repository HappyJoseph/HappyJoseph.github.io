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
              <h1 className={classes.cardTitleWhite}>Summary of qualifications</h1>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Success fontSize='25px'>
                    Strong computer programming experiences based on specialized knowledge 
                  </Success>
                  <Muted fontSize='18px'>
                    Object Oriented Programming, Data Structure, Algorithm, Design Pattern
                  </Muted>
                </GridItem>
              </GridContainer>
              <GridContainer spacing={3}>
                <GridItem xs={12} sm={12} md={12}>
                    <Success fontSize='25px'>
                      Various Programming skills
                    </Success>
                    <Muted fontSize='18px'>
                      . Javascript(React, WebGL), Server Programming(NodeJS), 
                      Java(android), C++(MFC), C#(WPF), Labview(sound signal processing)
                    </Muted>
                  </GridItem>
                </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Success fontSize='25px'>
                    Build system architecture
                  </Success>
                  <Muted fontSize='18px'>
                    . Build standalone, network or automation system
                  </Muted>
                  <Muted fontSize='18px'>
                    . Optimize system efficiency for the computational speed of algorithms
                  </Muted>  
                  <Muted fontSize='18px'>
                    . Discover structural faults and bugs in a system, improve it and lead high performance
                  </Muted>  
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Success fontSize='25px'>
                    Automation robot programming
                  </Success>
                  <Muted fontSize='18px'>
                    Automation robot programming for manufacture facilities.
                  </Muted>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
