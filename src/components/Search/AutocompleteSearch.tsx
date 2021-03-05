import React from "react"
import algoliasearch from "algoliasearch/lite"
import { AutocompleteProvided } from "react-instantsearch-core"
import {
    connectAutoComplete,
    PoweredBy,
    InstantSearch,
} from "react-instantsearch-dom"
import {
    TextField,
    Popper,
    Grow,
    Paper,
    ClickAwayListener,
    MenuItem,
    MenuList,
    fade,
    makeStyles,
    Popover,
} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID as string,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY as string
)

// Components

import SearchHitComponent from "./SearchHitComponent"

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        width: "auto",
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
}))

type Props = AutocompleteProvided

const Autocomplete = ({ hits, currentRefinement, refine }: Props) => {
    const classes = useStyles()
    const anchorRef = React.useRef(null)
    const [open, setOpen] = React.useState(false)
    const handleClose = () => setOpen(false)

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
                onFocus={() => setOpen(true)}
                value={currentRefinement}
                ref={anchorRef}
                variant="filled"
            />
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                placement="bottom"
                transition
                disablePortal
            >
                {({ TransitionProps }) => (
                    <Grow {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <div>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="menu-list-grow"
                                    >
                                        {hits.map((hit) => (
                                            <SearchHitComponent
                                                hit={hit}
                                                key={hit.objectID}
                                            />
                                        ))}
                                    </MenuList>
                                    <PoweredBy />
                                </div>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}

const ConnectedAutoComplete = connectAutoComplete(Autocomplete)

export default function S() {
    return (
        <InstantSearch indexName="Posts" searchClient={searchClient}>
            <ConnectedAutoComplete />
        </InstantSearch>
    )
}
