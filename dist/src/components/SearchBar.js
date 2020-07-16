import React from "react";
import Tag from "./Tag";

function SearchBar(props) {
  const filterValues = props.filterValues;
  console.log(`props.filterValues ${filterValues}`);

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
    </div>
  );
}

export default SearchBar;
