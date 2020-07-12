import React, { useState } from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";
import ShowJobListings from "./ShowJobListings";
import FilterJobListings from "./FilterJobListings";

function FilterableSkillsTable(props) {
  const [filterQueries, setFilterQueries] = useState([]);

  const addQuery = (role) => {
    !filterQueries.includes(role) &&
      setFilterQueries((prevState) => [...prevState, role]);
  };

  const removeQuery = (role) => {
    const filteredQueries = filterQueries.filter((query) => query !== role);
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
        <div className="columns">
          <ShowJobListings job={job} />
          <FilterJobListings
            job={job}
            onFilterRoleClicked={(role) => addQuery(role)}
          />
        </div>
      ))}
    </div>
  );
}

export default FilterableSkillsTable;
