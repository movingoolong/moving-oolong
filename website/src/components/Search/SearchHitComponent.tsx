import React from "react"
import { Grid, MenuItem, makeStyles } from "@material-ui/core"
import { navigate } from "gatsby"
import { Hit, BasicDoc } from "react-instantsearch-core"

import dayjs from "dayjs"
import config from "data/SiteConfig"
import EventIcon from "@material-ui/icons/Event"
import Text from "@components/Typography"
import MarkdownContent from "@components/General/MarkdownContent"

// Components
const useStyles = makeStyles((theme) => ({
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
        width: "20vw",
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

type Props = {
    hit: Hit<BasicDoc>
}

const SearchHitComponent = ({ hit }: Props) => {
    const classes = useStyles()
    return (
        <MenuItem onClick={() => navigate(hit.slug)}>
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
                        {dayjs(hit.date).format(config.dateFormat)}
                    </Text>
                    <div className={classes.tags}>
                        {hit.tags.map((tag) => (
                            <Text
                                variant="body2"
                                color="textPrimary"
                                display="inline"
                                key={tag}
                            >{`#${tag} `}</Text>
                        ))}
                    </div>
                </Grid>
                <Grid item></Grid>
                <Grid item>
                    <MarkdownContent
                        className={classes.description}
                        content={hit.excerpt}
                    />
                </Grid>
            </Grid>
        </MenuItem>
    )
}

export default SearchHitComponent
