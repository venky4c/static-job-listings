import React, { useState } from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";
import JobSkillsTable from "./JobSkillsTable";
import ShowJobListings from "./ShowJobListings";
import FilterJobListings from "./FilterJobListings";

function FilterableSkillsTable(props) {
  // const [filterRole, setFilterRole] = useState("");
  const [filterQueries, setFilterQueries] = useState([]);

  const addQuery = (role) => {
    !filterQueries.includes(role) && setFilterQueries(prevState => [...prevState, role])
  }

  const removeQuery = (role) => {
    const filteredQueries = filterQueries.filter(query => query !== role)
    setFilterQueries(filteredQueries);
  }

  return (
    <div className="wrapper">
      <Header />
      <SearchBar
        // role={filterRole}
        filterValues={filterQueries}
      // addQuery={(role) => addQuery(role)}
      // removeQuery={(role) => removeQuery(role)}
      // onFilterRoleChange={(role) => setFilterRole(role)}
      />
      {props.jobs.filter(job => filterQueries.every(() => filterQueries.includes(job.role))).map(job => (
        <div className="columns">
          <ShowJobListings job={job} />
          <FilterJobListings
            job={job}
            onFilterRoleClicked={(role) => addQuery(role)}
          />
        </div>))}
      {/* <JobSkillsTable
        jobs={props.jobs}
        // filterRole={filterRole}
        filterRoles={filterQueries}
        // onFilterRoleClicked={(role) => setFilterRole(role)}
        onFilterRoleClicked={(role) => addQuery(role)}
      /> */}
    </div>
  );
}

export default FilterableSkillsTable;
