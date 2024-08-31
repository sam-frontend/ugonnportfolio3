import React from "react";
import { Grid, Button, Typography, Divider } from "@material-ui/core";
import TextLoop from "react-text-loop";
import { scroller } from "react-scroll";

import { useStyles } from "./styles";

export default function () {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="flex-end"
      // direction="column-reverse"
      className={`${classes.container}`}
      item
      xs={12}
      lg={11}
      id="home"
    >
      <Grid container item xs={12} className={`${classes.heroWordsImg}`}>
        <Grid
          item
          container
          md={5}
          sm={4}
          xs={12}
          className={`${classes.heroLeftContainer}`}
        >
          <Grid item xs={12} className={`${classes.heroSpacing}`}>
            <Typography className={`${classes.hello}`} variant="h5">
              Hi,Everyone, I'm
            </Typography>
          </Grid>
          <Grid item xs={12} className={`${classes.heroSpacing}`}>
            <Typography className={`${classes.name}`} variant="h1">
              Sam <br /> Ugonna
            </Typography>
          </Grid>
          <Grid item xs={12} className={`${classes.heroSpacing}`}>
            <Divider className={`${classes.heroDivider}`} />
          </Grid>
          <Grid className={`${classes.heroSpacing}`} item xs={12}>
            <TextLoop >
              <h2 className={`${classes.occupation}`}>Frontend Engineer</h2>
              <h2 className={`${classes.occupation}`}>Backend Engineer(entry level)</h2>
              <h2 className={`${classes.occupation}`}>Product Designer</h2>
              <h2 className={`${classes.occupation}`}>Content Creator</h2>
            </TextLoop>
          </Grid>
        </Grid>
        <Grid item md={7} xs={12} sm={8}>
          <div className={classes.heroImage}></div>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Button
            classes={{ root: classes.heroButtons }}
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => {
              scroller.scrollTo("services", {
                containerId: "scrollcntr",
                smooth: true,
                duration: 900,
              });
            }}
          >
            Schedule a session
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            classes={{ root: classes.heroButtons }}
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              const url =
                "/";
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "Sam_Ugonna_Resume.pdf");
              link.target = "_blank";
              link.click();
            }}
          >
            Download Resume
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
