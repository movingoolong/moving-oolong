import React, { useState, useEffect, useRef } from "react";
import {
    InstantSearch,
    Index,
    connectStateResults,
    PoweredBy
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import { ClickAwayListener, Grow, Popper, withStyles } from "@material-ui/core";

import SearchInput from "components/Search/SearchInput";
import SearchHitsWrapper from "components/Search/SearchHitsWrapper";
import SearchHits from "components/Search/SearchHits";

const Results = connectStateResults(
    ({ searchState: state, searchResults: res, children }) =>
        res && res.nbHits > 0 ? children : `No results for '${state.query}'`
);

const Stats = connectStateResults(
    ({ searchResults: res }) =>
        res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
);

const styles = theme => ({
    popper: {
        width: "50%",
        top: "45px",
    },
    stats: {
        marginLeft: theme.spacing(1),
        color: theme.palette.secondary.main,
    },
    grow: {
        transformOrigin: "center bottom",
        [theme.breakpoints.down('xs')]: {
            transformOrigin: "center left",
        },
    },
});

function Search(props) {
    const { classes } = props;
    const [query, setQuery] = useState(``);
    const searchClient = algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
    );

    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    return (
        <ClickAwayListener onClickAway={handleClose} ref={anchorRef}>
            <InstantSearch
                indexName="Posts"
                searchClient={searchClient}
                onSearchStateChange={({ query }) => setQuery(query)}
            >
                <>
                    <SearchInput onFocus={handleOpen} />
                    <Popper open={query.length > 0 && open} anchorEl={anchorRef.current} transition className={classes.popper}>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center bottom' : 'center bottom' }}
                            >
                                <SearchHitsWrapper open={query.length > 0 && open} onKeyDown={handleListKeyDown}>
                                    <Index indexName="Posts">
                                        <div className={classes.stats}>
                                            <Stats />
                                        </div>
                                        <Results>
                                            <SearchHits />
                                        </Results>
                                    </Index>
                                    <PoweredBy />
                                </SearchHitsWrapper>

                            </Grow>)}
                    </Popper>
                </>

            </InstantSearch >
        </ClickAwayListener>
    )
}

export default withStyles(styles)(Search)