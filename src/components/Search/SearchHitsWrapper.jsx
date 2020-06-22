import React, { forwardRef } from "react";
import { Paper, MenuList, withStyles } from "@material-ui/core";

// Components
const styles = (theme) => ({
  paper: {
    width: "100%",
  },
  menu: {
    width: "100%",
  },
});

function SearchHitsWrapper(props, ref) {
  const { classes, children, open, ...rest } = props;
  return (
    <Paper className={classes.paper}>
      <MenuList className={classes.menu} autoFocusItem={open} {...rest}>
        {children}
      </MenuList>
    </Paper>
  );
}

export default withStyles(styles)(forwardRef(SearchHitsWrapper));
