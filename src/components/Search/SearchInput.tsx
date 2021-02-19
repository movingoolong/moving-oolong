import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { SearchBoxProvided } from "react-instantsearch-core"
import {
    TextField,
    TextFieldProps,
    withStyles,
    fade,
    Theme,
    createStyles,
    WithStyles,
} from "@material-ui/core"

// Components
import SearchIcon from "@material-ui/icons/Search"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginLeft: 0,
            width: "auto",
            [theme.breakpoints.up("md")]: {
                marginLeft: theme.spacing(3),
            },
        },
        searchIcon: {
            pointerEvents: "none",
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(1),
        },
        textField: {
            margin: 0,
            padding: theme.spacing(0),
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.primary.contrastText, 0.4),
            "&:hover": {
                backgroundColor: fade(theme.palette.primary.contrastText, 0.6),
            },
            "&:focus": {
                backgroundColor: fade(theme.palette.primary.contrastText, 0.7),
            },
        },
        input: {
            color: theme.palette.secondary.dark,
            padding: theme.spacing(1),
        },
    })

type Props = WithStyles<typeof styles> & SearchBoxProvided & TextFieldProps

const SearchInput = (props: Props, ref: React.Ref<HTMLElement>) => {
    const { classes, refine, ...rest } = props
    return (
        <div className={classes.root}>
            <TextField
                className={classes.textField}
                placeholder="Search"
                aria-label="search"
                size="small"
                InputProps={{
                    startAdornment: (
                        <SearchIcon
                            className={classes.searchIcon}
                            color="primary"
                        />
                    ),
                    margin: "dense",
                    disableUnderline: true,
                    className: classes.textField,
                }}
                inputProps={{
                    className: classes.input,
                }}
                onChange={(e) => refine(e.target.value)}
                variant="filled"
                inputRef={ref}
                {...rest}
            />
        </div>
    )
}

export default connectSearchBox(
    withStyles(styles)(React.forwardRef(SearchInput))
)
