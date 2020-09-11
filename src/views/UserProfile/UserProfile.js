import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";

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
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <h3 style={{position:'absolute', right:'5%', top:'90%', fontSize:'2rem', fontWeight:'bold', color:'#999'}}>tech. React</h3>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h1 className={classes.cardTitleWhite}>Joseph Kim</h1>
              <h5 className={classes.cardCategoryWhite}>Computer Engineer for nine years</h5>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Muted className={classes.simpleText}>
                    Company
                  </Muted>
                  <Primary fontSize='20px'>
                    Samsung Electronics
                  </Primary>
                  <Primary>
                    (2012 ~)
                  </Primary>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Muted>
                    Departement
                  </Muted>
                  <Primary fontSize='20px'>
                    Samsung Venture Team C-Lab
                  </Primary>
                </GridItem>
              </GridContainer>
              <GridContainer spacing={3}>
                <GridItem xs={12} sm={12} md={12}>
                  <Muted>
                    Position
                  </Muted>
                  <Primary fontSize='20px'> 
                    Senior Engineer
                  </Primary>
                </GridItem>
              </GridContainer>
              <GridContainer spacing={3}>
                <GridItem xs={12} sm={12} md={12}>
                  <Muted>
                    Education
                  </Muted>
                  <Primary fontSize='20px'> 
                    Bachelor of Computer Engineering
                  </Primary>
                  <Primary fontSize='20px'> 
                    Kyung Pook National University(Daegu, South Korea)
                  </Primary>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Muted>
                    E-mail address
                  </Muted>
                  <Primary fontSize='20px'>
                    cassita0623@gmail.com
                  </Primary>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Muted>
                    Location
                  </Muted>
                  <Primary fontSize='20px'>
                    Gumi-Si, South Korea
                  </Primary>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>Josph Kim(Jinki Kim)</h4>
              <p className={classes.description}>
              Computer programming expert with extensive experience.
              I have specialized skills related to system design, building, and maintenance.
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
