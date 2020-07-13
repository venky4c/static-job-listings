import React from "react";
import Tag from "./Tag";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <div>
        {props.filterValues.map((value) => (
          <Tag name={value} />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
