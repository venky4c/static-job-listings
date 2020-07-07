import React from "react";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <div class="block">
        <input
          type="search"
          class="input"
          value={props.role}
          placeholder="Click any x button"
          onChange={(e) => props.onFilterRoleChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
