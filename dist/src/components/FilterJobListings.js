import React from "react";

function FilterJobListings(props) {
  const job = props.job;
  const role = job.role;
  const level = job.level;
  const languages = job.languages;
  const tools = job.tools;

  return (
    <div className="column">
      <p>
        <span className="tag is-primary is-small">
          {role}
          <button className="delete" value={role} />
        </span>
        <span className="tag is-primary is-small mx-1">
          {level}
          <button className="delete"></button>
        </span>
        <span className="languages">
          {languages.map((value, index) => (
            <span className="tag is-primary is-small">
              {value}
              <button className="delete mx-1" key={index}></button>
            </span>
          ))}

          {tools.map((value, index) => (
            <span className="tag is-primary is-small mx-1">
              {value}
              <button className="delete" key={index}></button>
            </span>
          ))}
        </span>
      </p>
    </div>
  );
}

export default FilterJobListings;
