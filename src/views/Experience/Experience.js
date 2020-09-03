import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Divider from '@material-ui/core/Divider';

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "30px",
    marginTop: "30px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "13px",
    left: "0",
    marginTop: "5%",
    marginLeft: "7%",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
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

export default function Experience() {
  const classes = useStyles();
  const yearFSize = '1.5rem';
  const titleFSize = '2rem';
  const desFSize = '1rem';
  const contentSize = '1.1rem';
  return (
    <Card>
      <CardHeader color="primary">
        <h1 className={classes.cardTitleWhite}>Experience</h1>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>
            <Muted fontSize={yearFSize}>2012~2015</Muted>
          </div>
          <Info fontSize={titleFSize}>Android Developer in Camera R&D Group, Samsung Electronics</Info>
          <Muted fontSize={desFSize}>Developed android camera applications for Galaxy series models</Muted>
          <div style={{marginTop : '30px'}}></div>
          <Muted fontSize={desFSize}>Accomplishments</Muted>
          <Warning fontSize={contentSize}>
            Involved in development of Samsung Galaxy Phone, Tablet models over 20 models for 3 years,
            Such as Galaxy Series, Tablet models
          </Warning>
          <div style={{marginTop : '10px'}}></div>
          <Warning fontSize={contentSize}>
            Developed Galaxy 3 model camera application 
            which model was one of the most popular smart  phone
          </Warning>
          <div style={{marginTop : '10px'}}></div>
          <Warning fontSize={contentSize}>
            Be specially promoted a year earlier as R&D associate manager
          </Warning>
        </div> 
        <Divider/>
        <div className={classes.typo}>
          <div className={classes.note}>
            <Muted fontSize={yearFSize}>2016~2019</Muted>
          </div>
          <Info fontSize={titleFSize}>Automation System Engineer in Automation Manufacturing Group, Samsung Electronics</Info>
          <Muted fontSize={desFSize}>
            Invented full automation system or process for smart phone manufacturing line, Assembling, Function Test, Appearance Vision Test
          </Muted>
          <div style={{marginTop : '30px'}}></div>
          <Muted fontSize={desFSize}>Accomplishments</Muted>
          <Warning fontSize={contentSize}>
            The system tests products shipped in all manufacturing branches of Samsung over the world
          </Warning>
          <div style={{marginTop : '10px'}}></div>
          <Warning fontSize={contentSize}>
            Installed and maintained full automation test lines over 40, China(2016), Vietnam(2017), Brazil(2019) Corporation
          </Warning>
          <div style={{marginTop : '10px'}}></div>
          <Warning fontSize={contentSize}>
            Made training program for automation manufacturing in global branches of Samsung
          </Warning>
        </div>
        <Divider/>
        <div className={classes.typo}>
          <div className={classes.note}>
            <Muted fontSize={yearFSize}>2019~2020</Muted>
          </div>
          <Info fontSize={titleFSize}> Samsung Venture team C-LAB</Info>
          <Muted fontSize={desFSize}>
            Project called Life finder is search and rescue system for missing person
          </Muted>
          <Muted fontSize={desFSize}>
            Build Geographic Information System
          </Muted>
          <div style={{marginTop : '30px'}}></div>
          <Muted fontSize={desFSize}>Accomplishments</Muted>
          <Warning fontSize={contentSize}>
            In progress
          </Warning>
        </div>
      </CardBody>
    </Card>
  );
}
