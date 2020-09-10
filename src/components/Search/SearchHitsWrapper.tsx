import React from "react"
import {
    Paper,
    MenuList,
    MenuListProps,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Components
const styles = () =>
    createStyles({
        paper: {
            width: "100%",
        },
        menu: {
            width: "100%",
        },
    })

type Props = WithStyles<typeof styles> &
    MenuListProps & {
        children: React.ReactNode
        open: boolean
    }

function SearchHitsWrapper(props: Props) {
    const { classes, children, open, ...rest } = props
    return (
        <Paper className={classes.paper}>
            <MenuList className={classes.menu} autoFocusItem={open} {...rest}>
                {children}
            </MenuList>
        </Paper>
    )
}

export default withStyles(styles)(SearchHitsWrapper)
