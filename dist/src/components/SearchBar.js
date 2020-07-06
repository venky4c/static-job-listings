import React from "react";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <div class="block">
        <div class="field has-addons">
          <p class="control">
            <input
              type="text"
              class="input"
              placeholder="Click any x button"
              onChange={(e) => props.onFilterRoleChange(e.target.value)}
            />
          </p>
          <p class="control">
            <a href="" class="button is-info">
              Search
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
