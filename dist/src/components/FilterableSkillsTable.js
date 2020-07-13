import React, { useState } from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";

import JobCard from "./JobCard";

function FilterableSkillsTable(props) {
  const [filterQueries, setFilterQueries] = useState([]);

  const addQuery = (criteria) => {
    !filterQueries.includes(criteria) &&
      setFilterQueries((prevState) => [...prevState, criteria]);
  };

  const removeQuery = (criteria) => {
    const filteredQueries = filterQueries.filter((query) => query !== criteria);
    setFilterQueries(filteredQueries);
  };

  const filterData = () => {
    return props.jobs.filter((job) =>
      filterQueries.every((filterQuery) =>
        Object.keys(job).some((key) =>
          job[key].toString().includes(filterQuery)
        )
      )
    );
  };

  return (
    <div className="wrapper">
      <Header />
      <SearchBar filterValues={filterQueries} />
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
