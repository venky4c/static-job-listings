import React from "react";
import ShowJobListings from "./ShowJobListings";
import FilterJobListings from "./FilterJobListings";

function JobSkillsTable(props) {
  const rows = [];
  const filterRole = props.filterRole;
  let lastCategory = null;

  props.jobs.forEach((job) => {
    if (job.role.indexOf(filterRole) === -1) {
      return;
    }
    rows.push(
      <div className="columns">
        <ShowJobListings job={job} />
        <FilterJobListings job={job} />
      </div>
    );
  });

  return (
    <div className="jobSkillsTable">
      <div className="card">{rows}</div>
    </div>
  );
}

export default JobSkillsTable;
