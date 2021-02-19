import React from "react"
import {
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel,
    makeStyles,
} from "@material-ui/core"

// Components

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    formControl: {
        margin: theme.spacing(3),
    },
    groupLabel: {
        color: theme.palette.primary.main,
    },
    label: {
        color: theme.palette.text.primary,
    },
}))

function TagSelectionInput({ tags, urlTags, setURLTags }) {
    const classes = useStyles()

    const handleChange = (event) => {
        const urlTagsArray = urlTags !== undefined ? urlTags.split(",") : []
        const index = urlTagsArray.indexOf(event.target.name)
        if (index == -1 && event.target.checked) {
            urlTagsArray.push(event.target.name)
        } else if (index != -1 && !event.target.checked) {
            urlTagsArray.splice(index, 1)
        }
        setURLTags(urlTagsArray.join(","))
    }

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel
                    component="legend"
                    color="primary"
                    className={classes.groupLabel}
                >
                    <b>Filter by Tags</b>
                </FormLabel>
                <FormGroup>
                    {Object.entries(tags).map(([key, val]) => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={val}
                                    onChange={handleChange}
                                    name={key}
                                />
                            }
                            label={<div className={classes.label}>{key}</div>}
                            key={key}
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default TagSelectionInput
