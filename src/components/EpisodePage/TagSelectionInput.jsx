import React from "react";
import { Checkbox, FormControl, FormLabel, FormGroup, FormControlLabel, withStyles } from "@material-ui/core";

// Components

const styles = theme => ({
    root: {
        display: "flex",
    },
    formControl: {
        margin: theme.spacing(3),
    },
    groupLabel: {
        color: theme.palette.primary.main,
    },
});

function TagSelectionInput(props) {
    const { classes, tags, urlTags, setURLTags } = props;

    const handleChange = event => {
        const urlTagsArray = urlTags !== undefined ? urlTags.split(",") : [];
        const index = urlTagsArray.indexOf(event.target.name);
        if (index == -1 && event.target.checked) {
            urlTagsArray.push(event.target.name);
        } else if (index != -1 && !event.target.checked) {
            urlTagsArray.splice(index, 1);
        }
        setURLTags(urlTagsArray.join(","));
    };

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" color="primary" className={classes.groupLabel}>
                    <b>Filter by Tag</b>
                </FormLabel>
                <FormGroup>
                    {Object.entries(tags).map(([key, val]) =>
                        <FormControlLabel
                            control={<Checkbox checked={val} onChange={handleChange} name={key} />}
                            label={key}
                            key={key}
                        />
                    )}
                </FormGroup>
            </FormControl>
        </div>
    );
}

export default withStyles(styles)(TagSelectionInput)