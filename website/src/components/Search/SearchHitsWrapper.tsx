import React from "react"
import { Paper, MenuList, MenuListProps, makeStyles } from "@material-ui/core"

// Components
const useStyles = makeStyles({
    paper: {
        width: "100%",
    },
    menu: {
        width: "100%",
    },
})

type Props = MenuListProps & {
    children: React.ReactNode
    open: boolean
}

function SearchHitsWrapper(props: Props) {
    const { children, open, ...rest } = props
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <MenuList className={classes.menu} autoFocusItem={open} {...rest}>
                {children}
            </MenuList>
        </Paper>
    )
}

export default SearchHitsWrapper
