import React, { useState } from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";

import JobCard from "./JobCard";

function FilterableSkillsTable(props) {
  const [filterQueries, setFilterQueries] = useState([]);

  const initialState = [];

  const reset = (e) => {
    // Method called by the 'Clear' button inside the search bar
    e.preventDefault();
    setFilterQueries(initialState);
  };

  const addQuery = (criteria) => {
    // Method called when each button is clicked
    !filterQueries.includes(criteria) &&
      setFilterQueries((prevState) => [...prevState, criteria]);
  };

  const removeQuery = (criteria) => {
    // This is called When the button in the search bar is clicked
    const filteredQueries = filterQueries.filter((query) => query !== criteria);
    setFilterQueries(filteredQueries);
  };

  const filterData = () => {
    return props.jobs.filter((
      job // filter jobs based on below conditions
    ) =>
      filterQueries.every((filterQuery) =>
        Object.keys(job).some((
          key //Job is each item of the data json file; Object.keys(job) gives each property like role, level
        ) => job[key].toString().includes(filterQuery))
      )
    );
  };

  return (
    <div className="wrapper">
      <Header />
      <SearchBar
        filterValues={filterQueries}
        removeQuery={removeQuery}
        reset={reset}
      />
      {filterData().map((job) => (
        <div>
          <JobCard
            job={job}
            onFilterButtonClicked={(criteria) => addQuery(criteria)}
          />
        </div>
      ))}
    </div>
  );
}

export default FilterableSkillsTable;
