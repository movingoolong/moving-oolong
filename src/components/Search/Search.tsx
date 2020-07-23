import React, { useState, useEffect, useRef } from "react"
import {
    InstantSearch,
    Index,
    connectStateResults,
    PoweredBy,
} from "react-instantsearch-dom"
import { StateResultsProvided } from "react-instantsearch-core"
import algoliasearch from "algoliasearch/lite"
import {
    ClickAwayListener,
    Grow,
    Popper,
    withStyles,
    Theme,
    createStyles,
    WithStyles,
    Drawer,
    PopperProps,
} from "@material-ui/core"

import SearchInput from "components/Search/SearchInput"
import SearchHitsWrapper from "components/Search/SearchHitsWrapper"
import SearchHits from "components/Search/SearchHits"

// const Results = connectStateResults(({ searchState, searchResults }: StateResultsProvided) =>
//     searchResults && searchResults.nbHits > 0
//         ? `${searchResults.nbHits} result${searchResults.nbHits > 1 ? `s` : ``}`
//         : `No results for '${searchState.query}'`)

const StatsComponent = ({ searchState, searchResults }: StateResultsProvided) =>
    searchResults && searchResults.nbHits > 0
        ? `${searchResults.nbHits} result${searchResults.nbHits > 1 ? `s` : ``}`
        : `No results for '${searchState.query}'`

// @ts-ignore Connect state results wants a class component returned but functional should be good enough
const Stats = connectStateResults(StatsComponent)

// const Stats = connectStateResults((props): StateResultsProvided => {
//     const {searchState, searchResults} = props
//     return searchResults ? <></> : <></>)
// })

// const Results = connectStateResults(
//     ({ searchState: state, searchResults: res, children }) =>
//         res && res.nbHits > 0 ? children : `No results for '${state.query}'`
// )

// const Stats = connectStateResults(
//     ({ searchResults: res }) =>
//         res &&
//         res.nbHits > 0 &&
//         `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
// )

const styles = (theme: Theme) =>
    createStyles({
        popper: {
            width: "50vw",
            marginTop: theme.spacing(2),
        },
        stats: {
            marginLeft: theme.spacing(2),
            color: theme.palette.secondary.main,
        },
        grow: {
            transformOrigin: "center bottom",
            [theme.breakpoints.down("xs")]: {
                transformOrigin: "center left",
            },
        },
        drawer: {
            width: "300px",
        },
    })

type ReferenceObject = PopperProps["anchorEl"]

type Props = WithStyles<typeof styles>

function Search(props: Props) {
    const { classes } = props
    const [query, setQuery] = useState(``)
    const searchClient = algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID as string,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY as string
    )

    const [anchorEl, setAnchorEl] = React.useState<ReferenceObject>(null)
    const handleFocus = (
        event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if(anchorEl == null)
            setAnchorEl(event.currentTarget)
        setOpen(true)
    }

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleListKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
        if (event.key === "Tab") {
            event.preventDefault()
            setOpen(false)
        }
    }

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <InstantSearch
                indexName="Posts"
                searchClient={searchClient}
                onSearchStateChange={({ query }) => setQuery(query)}
            >
                <>
                    <SearchInput onFocus={handleFocus} />
                    <Popper
                        open={open && query.length > 0}
                        id={open ? 'search-popper' : undefined}
                        anchorEl={anchorEl}
                        transition
                        className={classes.popper}
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === "bottom"
                                            ? "center bottom"
                                            : "center bottom",
                                }}
                            >
                                <SearchHitsWrapper
                                    open={false}
                                    onKeyDown={handleListKeyDown}
                                >
                                    <Index indexName="Posts">
                                        <div className={classes.stats}>
                                            <Stats />
                                        </div>
                                        <SearchHits />
                                    </Index>
                                    <PoweredBy />
                                </SearchHitsWrapper>
                            </Grow>
                        )}
                    </Popper>
                </>
            </InstantSearch>
        </ClickAwayListener>
    )
}

export default withStyles(styles)(Search)
