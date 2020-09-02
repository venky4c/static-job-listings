import React, { useState } from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";

import JobCard from "./JobCard";

function FilterableSkillsTable(props) {
  const [filterQueries, setFilterQueries] = useState([]);

  const initialState = [];

  const reset = (e) => {
    // Function called by the 'Clear' button inside the search bar
    e.preventDefault();
    setFilterQueries(initialState);
  };

  const addQuery = (criteria) => {
    // Function called when each of the RHS button(s) is clicked
    !filterQueries.includes(criteria) &&
      setFilterQueries((prevState) => [...prevState, criteria]);
  };

  const removeQuery = (criteria) => {
    // This is called When the button(s) inside the search bar is clicked. Suppose you have selected 'Frontend' and 'Junior'
    // from the RHS buttons. Now filterQueries contains these two entries. If you now click on 'Frontend's close
    // button, this function is invoked and the filter for 'Frontend' is removed which means all the roles are loaded back
    // including the 'Frontend'. We are no longer filtering on the basis of 'role'. So we see jobs related to all 3 roles
    // 'Frontend', 'Fullstack' and 'Backend'

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
        numFilters={filterQueries.length}
      />
      {filterData().map((job) => (
        <div key={job.id}>
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
