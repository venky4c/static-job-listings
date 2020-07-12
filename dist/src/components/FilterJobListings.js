import React from "react";

function FilterJobListings(props) {
  const job = props.job;
  const role = job.role;
  const level = job.level;
  const languages = job.languages;
  const tools = job.tools;

  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <button
            className="button is-primary is-outlined is-small mx-1 my-1"
            value={role}
            onClick={(e) => props.onFilterRoleClicked(e.target.value)}
          >
            {role}
          </button>
          <button 
            className="button is-primary is-outlined is-small mx-1 my-1"
            value={level}
            onClick={(e) => props.onFilterRoleClicked(e.target.value)}
          >
            {level}
          </button>
          <span className="languages">
            {languages.map((value, index) => (
              <button
                className="button is-primary is-outlined is-small mx-1 my-1"
                key={index}
                value={value}
                onClick={(e) => props.onFilterRoleClicked(e.target.value)}
              >
                {value}
              </button>
            ))}

            {tools.map((value, index) => (
              <button
                className="button is-primary is-outlined is-small mx-1 my-1"
                key={index}
                value={value}
                onClick={(e) => props.onFilterRoleClicked(e.target.value)}
              >
                {value}
              </button>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FilterJobListings;
