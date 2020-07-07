import React, { useState } from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";
import JobSkillsTable from "./JobSkillsTable";

function FilterableSkillsTable(props) {
  const [filterRole, setFilterRole] = useState("");

  return (
    <div className="wrapper">
      <Header />
      <SearchBar
        role={filterRole}
        onFilterRoleChange={(role) => setFilterRole(role)}
      />
      <JobSkillsTable
        jobs={props.jobs}
        filterRole={filterRole}
        onFilterRoleClicked={(role) => setFilterRole(role)}
      />
    </div>
  );
}

export default FilterableSkillsTable;
