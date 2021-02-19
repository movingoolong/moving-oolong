import React from "react"
import { Grid, MenuItem, makeStyles } from "@material-ui/core"

import moment from "moment"
import config from "data/SiteConfig"
import EventIcon from "@material-ui/icons/Event"
import CustomLink from "components/General/CustomLink"
import TagLink from "components/Posts/TagLink"
import Text from "components/Typography"

// Components
const useStyles = makeStyles((theme) => ({
    root: {},
    icon: {
        color: theme.palette.primary.main,
    },
    title: {
        marginBottom: 0,
    },
    date: {
        marginLeft: theme.spacing(1),
        margin: 0,
    },
    tags: {
        fontSize: "10px",
        color: theme.palette.text.primary,
        marginLeft: theme.spacing(2),
    },

    description: {
        height: "44px",
        overflowY: "hidden",
        "& p": {
            fontSize: "14px",
            margin: 0,
            color: theme.palette.text.primary,
        },

        "& a": {
            color: theme.palette.primary.main,
        },
    },
}))

const SearchHitComponent = (props) => {
    const { hit, key } = props
    const classes = useStyles()
    return (
        <MenuItem key={key}>
            <CustomLink to={hit.slug}>
                <Grid container direction="column">
                    <Grid item>
                        <Text
                            variant="h6"
                            className={classes.title}
                            color="primary"
                        >
                            {hit.title}
                        </Text>
                    </Grid>
                    <Grid container item alignItems="center">
                        <EventIcon className={classes.icon} color="secondary" />
                        <Text
                            variant="subtitle1"
                            className={classes.date}
                            color="textPrimary"
                        >
                            {moment(hit.date).format(config.dateFormat)}
                        </Text>
                        <div className={classes.tags}>
                            {hit.tags.map((tag) => (
                                <TagLink tag={tag} key={tag} />
                            ))}
                        </div>
                    </Grid>
                    <Grid item></Grid>
                    <Grid item>
                        <Text
                            className={classes.description}
                            dangerouslySetInnerHTML={{ __html: hit.html }}
                        />
                    </Grid>
                </Grid>
            </CustomLink>
        </MenuItem>
    )
}

export default SearchHitComponent
