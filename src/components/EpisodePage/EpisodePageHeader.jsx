import React from "react";
import { IconButton, Grid, withStyles } from "@material-ui/core";

// Images
import apple from "assets/img/icons/apple_podcasts.png";
import spotify from "assets/img/icons/spotify.png";
import stitcher from "assets/img/icons/stitcher.png";
import soundcloud from "assets/img/icons/soundcloud.png";
import googleplay from "assets/img/icons/google-play-music.png";
import breaker from "assets/img/icons/breaker.png";
import radiopublic from "assets/img/icons/radiopublic.png";

const styles = (theme) => ({
  root: {},
  title: {
    textAlign: "left",
    color: theme.palette.primary.main,
    margin: theme.spacing(2),
  },
  description: {
    color: theme.palette.primary.dark,
    margin: theme.spacing(2),
  },
  icons: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
});

function EpisodePageContent(props) {
  const { classes } = props;
  return (
    <>
      <h1 className={classes.title}>New episodes drop every Monday morning!</h1>
      <Grid container>
        <Grid item xs={12} sm="auto">
          <h2 className={classes.description}> Listen on </h2>
        </Grid>
        <Grid item xs={12} sm={11}>
          <div className={classes.icons}>
            <IconButton
              className={classes.icon}
              href="https://open.spotify.com/show/02UAHtTye0bhzUPuNFM1HE?si=vkorccKzRi-IY75Dre5I-w"
            >
              <img src={spotify} alt="Spotify link" />
            </IconButton>
            <IconButton
              className={classes.icon}
              href="https://podcasts.apple.com/us/podcast/moving-oolong/id1490732891"
            >
              <img src={apple} alt="Apple podcasts link" />
            </IconButton>
            <IconButton
              className={classes.icon}
              href="https://soundcloud.com/moving-oolong"
            >
              <img src={soundcloud} alt="Soundcloud link" />
            </IconButton>
            <IconButton
              className={classes.icon}
              href="https://www.stitcher.com/podcast/moving-oolong?refid=stpr"
            >
              <img src={stitcher} alt="Stitcher link" />
            </IconButton>
            <IconButton className={classes.icon} href="">
              <img src={googleplay} alt="Google Play Music link" />
            </IconButton>
            <IconButton
              className={classes.icon}
              href="https://www.breaker.audio/moving-oolong"
            >
              <img src={breaker} alt="Breaker link" />
            </IconButton>
            <IconButton
              className={classes.icon}
              href="https://radiopublic.com/moving-oolong-6p0d2Q"
            >
              <img src={radiopublic} alt="Radio Public link" />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(EpisodePageContent);
