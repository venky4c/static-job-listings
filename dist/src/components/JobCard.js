import React from "react";

function JobCard(props) {
  const job = props.job;
  const {
    logo,
    company,
    featured,
    position,
    postedAt,
    contract,
    location,
    role,
    level,
    languages,
    tools,
  } = job;
  const isNew = job.new;

  return (
    <div className="card ">
      <div className="card-content">
        <div className="columns">
          <div className="column is-1">
            <img src={require(`../assets/images/${logo}`)} alt="" />
          </div>
          <div className="column is-6">
            <span className="tag has-text-primary-dark has-text-weight-semibold is-medium">
              {company}
            </span>
            <span className="tag">
              {isNew === "true" && (
                <span className="tag is-primary"> NEW! </span>
              )}{" "}
            </span>
            <span className="tag">
              {featured === "true" && (
                <span className="tag is-dark"> FEATRUED </span>
              )}
            </span>

            <h4 className="title is-5">{position}</h4>
            <p>
              <span className="tag has-text-grey-light has-text-weight-bold mx-1">
                {postedAt}
              </span>
              <span class="icon-small">
                <span class="fa-stack">
                  <i class="fas fa-circle"></i>
                </span>
              </span>
              <span className="tag has-text-grey-light has-text-weight-bold mx-1">
                {contract}
              </span>
              <span class="icon-small">
                <span class="fa-stack">
                  <i class="fas fa-circle"></i>
                </span>
              </span>
              <span className="tag has-text-grey-light has-text-weight-bold mx-1">
                {location}
              </span>
            </p>
          </div>
          <hr size="2" width="80%" />
          <div className="column is-5">
            <button
              className="button is-primary is-outlined is-small mx-1 my-1 is-selected"
              value={role}
              onClick={(e) => props.onFilterButtonClicked(e.target.value)}
            >
              {role}
            </button>
            <button
              className="button is-primary is-outlined is-small mx-1 my-1 is-selected"
              value={level}
              onClick={(e) => props.onFilterButtonClicked(e.target.value)}
            >
              {level}
            </button>
            <span className="languages">
              {languages.map((value, index) => (
                <button
                  className="button is-primary is-outlined is-small mx-1 my-1 is-selected"
                  key={index}
                  value={value}
                  onClick={(e) => props.onFilterButtonClicked(e.target.value)}
                >
                  {value}
                </button>
              ))}

              {tools.map((value, index) => (
                <button
                  className="button is-primary is-outlined is-small mx-1 my-1 is-selected"
                  key={index}
                  value={value}
                  onClick={(e) => props.onFilterButtonClicked(e.target.value)}
                >
                  {value}
                </button>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
