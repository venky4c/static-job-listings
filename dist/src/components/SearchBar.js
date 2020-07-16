import React from "react";
import Tag from "./Tag";

function SearchBar(props) {
  let filterValues = props.filterValues;

  return (
    <div className="search-bar">
      <div>
        {filterValues.map((value, index) => (
          <Tag
            id={index}
            buttonName={value}
            index={index}
            deleteButton={() => props.removeQuery(value)}
          />
        ))}
      </div>
      <span className="tag">
        Clear
        <button className="delete is-danger" onClick={(e) => props.reset(e)}>
          Clear
        </button>
      </span>
    </div>
  );
}

export default SearchBar;
