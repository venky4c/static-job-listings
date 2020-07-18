import React from "react";
import Tag from "./Tag";

function SearchBar(props) {
  let filterValues = props.filterValues;

  return (
    <div className="search-bar">
      <div className="search">
        {filterValues.map((value, index) => (
          <Tag
            id={index}
            buttonName={value}
            index={index}
            deleteButton={() => props.removeQuery(value)}
          />
        ))}
      </div>
      {props.numFilters > 0 && (
        <div className="clear">
          <span className="tag is-primary">
            Clear
            <button
              className="delete is-danger"
              onClick={(e) => props.reset(e)}
            >
              Clear
            </button>
          </span>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
