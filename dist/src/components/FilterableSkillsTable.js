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

  const filterRoleAndLevel = () => {
    return props.jobs.filter(job => filterQueries.every(() => filterQueries.includes(job.role) || filterQueries.includes(job.level)))
  }

  const filter = () => {
    // dataList.filter((item) => {
    //   return Object.keys(item).some((key) => {
    //     console.log(item[key].toString());
    //     return item[key].toString().includes(value);
    //   });
    // });
    
    // console.log(props.jobs[])

    // console.log(props.jobs.filter(
    //   job => job.languages.foreach(
    //     language => filterQueries.every(() => filterQueries.includes(language))
    //   )))
  }

  filter()

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
      {filterRoleAndLevel().map(job => (
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
