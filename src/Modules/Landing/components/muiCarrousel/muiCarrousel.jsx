import React from "react";

import Typography from "@material-ui/core/Typography";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

import { useStyles } from "./styles";
import { Grid, Avatar } from "@material-ui/core";
import { Cloudinary } from "cloudinary-core";

const cloudinaryCore = new Cloudinary({ cloud_name: "mibase", secure: true });
const Alexus = cloudinaryCore.url(
  "personal/natebaker.me/Reviewers/alexus-mcgriff_ulb7ja",
  {
    dpr: "auto",
    width: "300",
    height: "300",
    crop: "fit",
    quality: "auto",
    format: "WebP",
    responsive_use_breakpoints: true,
  }
);
const Olivia = cloudinaryCore.url(
  "personal/natebaker.me/Reviewers/olivia-starnes_hmqb4q",
  {
    dpr: "auto",
    width: "300",
    height: "300",
    crop: "scale",
    quality: "auto",
    format: "WebP",
    responsive_use_breakpoints: true,
  }
);
const Thomas = cloudinaryCore.url(
  "personal/natebaker.me/Reviewers/thomas-hoang_kz7w8s",
  {
    dpr: "auto",
    width: "300",
    height: "300",
    crop: "scale",
    quality: "auto",
    format: "WebP",
    responsive_use_breakpoints: true,
  }
);

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    name: "Flight Booking App",
    occupationTitle: "Web",
    body:
      "
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel nibh a lorem auctor volutpat. Sed at massa vestibulum purus hendrerit porta vel et nibh.
    Nam vitae metus nec urna varius fermentum. Morbi ullamcorper blandit ante,
    et pretium odio consequat sed. Cras placerat, dolor in vestibulum molestie,",
    avi: Alexus,
  },
  {
    name: "Calenda App",
    occupationTitle: "Web",
    body:
      "
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel nibh a lorem auctor volutpat. Sed at massa vestibulum purus hendrerit porta vel et nibh. 
    Nam vitae metus nec urna varius fermentum. Morbi ullamcorper blandit ante, et pretium odio consequat sed.
    Cras placerat, dolor in vestibulum molestie,",
    avi: Thomas,
  },
  {
    name: "Restaurant App",
    occupationTitle: "Web",
    body:
      "
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel nibh a lorem auctor volutpat. 
    Sed at massa vestibulum purus hendrerit porta vel et nibh. Nam vitae metus nec urna varius fermentum. 
    Morbi ullamcorper blandit ante, et pretium odio consequat sed. Cras placerat, dolor in vestibulum molestie,",
    avi: Olivia,
  },
];

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {tutorialSteps.map(({ name, occupationTitle, body, avi }, index) => (
          <div key={index} className={`${classes.testimonialContainer}`}>
            <FormatQuoteIcon fontSize="large" className={`${classes.icon}`} />
            <Grid container className={`${classes.bodyContainer}`}>
              <Grid item xs={10} md={8}>
                <Typography variant="body1" className={`${classes.body}`}>
                  {body}
                </Typography>
              </Grid>
            </Grid>
            {Math.abs(activeStep - index) <= tutorialSteps.length - 1 ? (
              <ReviewerComment
                name={name}
                occupation={occupationTitle}
                avi={avi}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

const ReviewerComment = ({ name, occupation, avi }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid
        item
        container
        alignItems="flex-start"
        className={`${classes.aviContainers}`}
      >
        <Avatar alt="Nate Baker" src={avi} className={classes.large} />
      </Grid>
      <Grid item container className={`${classes.personNameContainer}`}>
        <Typography className={`${classes.name}`} variant="h4">
          {name}
        </Typography>
        <Typography className={`${classes.occupation}`} variant="h6">
          {occupation}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SwipeableTextMobileStepper;
