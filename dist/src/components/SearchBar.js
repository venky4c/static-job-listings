import React from "react";
import Tag from "./Tag";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <div class="block">
        {/* <input
          type="search"
          class="input"
          value={props.role}
          placeholder="Click any x button"
          onChange={(e) => props.onFilterRoleChange(e.target.value)}
        /> */}
        
        {props.filterValues.map(value => (
          <Tag name={value} />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
