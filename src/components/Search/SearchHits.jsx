import React from "react";
import { Link } from "gatsby";
import { connectHits } from "react-instantsearch-dom";
// Components
import SearchHitComponent from "components/Search/SearchHitComponent";

function SearchHits(props) {
  const { hits } = props;
  return (
    <>
      {hits.map((hit) => (
        <SearchHitComponent hit={hit} key={hit.id} />
      ))}
    </>
  );
}

export default connectHits(SearchHits);
