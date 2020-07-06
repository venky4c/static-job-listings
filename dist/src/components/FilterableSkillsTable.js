import React, { useState } from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";
import JobSkillsTable from "./JobSkillsTable";

function FilterableSkillsTable(props) {
  const [filterRole, setFilterRole] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  // const [filterLanguages, setFilterLanguages] = useState(null);
  // const [filterTools, setFilterTools] = useState(null);
  return (
    <div className="wrapper">
      <Header />
      <SearchBar
        role={filterRole}
        level={filterLevel}
        onFilterRoleChange={(role) => setFilterRole(role)}
        onFilterLevelChange={(level) => setFilterLevel(level)}
      />
      <JobSkillsTable
        jobs={props.jobs}
        filterRole={filterRole}
        filterLevel={filterLevel}
      />
    </div>
  );
}

export default FilterableSkillsTable;
