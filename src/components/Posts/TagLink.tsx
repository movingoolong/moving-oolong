import React from "react"
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core"

// Components
import CustomLink from "components/General/CustomLink"

const styles = (theme: Theme) =>
    createStyles({
        link: {
            color: theme.palette.secondary.main,
        },
    })

type Props = WithStyles<typeof styles> & {
    tag: string
}

function TagLink(props: Props) {
    const { classes, tag } = props

    return (
        <CustomLink
            className={classes.link}
            to={`/episodes/?tags=${tag}`}
            key={tag}
        >
            {`#${tag} `}
        </CustomLink>
    )
}

export default withStyles(styles)(TagLink)
