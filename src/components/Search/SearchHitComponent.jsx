import React from "react";
import { Link } from "gatsby";
import { Grid, MenuItem, withStyles } from "@material-ui/core";

import moment from "moment";
import config from "data/SiteConfig";
import EventIcon from "@material-ui/icons/Event";

// Components
const styles = (theme) => ({
  root: {},
  link: {
    textDecoration: "none",
  },
  icon: {
    color: theme.palette.primary.dark,
  },
  title: {
    color: theme.palette.primary.main,
    marginBottom: 0,
  },
  date: {
    color: theme.palette.secondary.main,
    marginLeft: theme.spacing(1),
    margin: 0,
  },
  tags: {
    fontSize: "10px",
    color: theme.palette.secondary.main,
    marginLeft: theme.spacing(2),
  },

  description: {
    height: "44px",
    overflowY: "hidden",
    "& p": {
      fontSize: "14px",
      margin: 0,
      color: theme.palette.secondary.main,
    },

    "& a": {
      color: theme.palette.secondary.dark,
    },
  },
});

const SearchHitComponent = (props) => {
  const { classes, hit, key } = props;
  return (
    <MenuItem key={key}>
      <Link className={classes.link} to={hit.slug}>
        <Grid container direction="column">
          <Grid item>
            <h4 className={classes.title}>{hit.title}</h4>
          </Grid>
          <Grid container item alignItems="center">
            <EventIcon className={classes.icon} color="secondary" />
            <h5 className={classes.date}>
              {moment(hit.date).format(config.dateFormat)}
            </h5>
            <div className={classes.tags}>
              {hit.tags.map((tag, index) => (
                <div key={tag}>{`#${tag} `}</div>
              ))}
            </div>
          </Grid>
          <Grid item></Grid>
          <Grid item>
            <div
              className={classes.description}
              dangerouslySetInnerHTML={{ __html: hit.html }}
            />
          </Grid>
        </Grid>
      </Link>
    </MenuItem>
  );
};

export default withStyles(styles)(SearchHitComponent);
