import React from "react";

function ShowJobListings(props) {
  // 
  const job = props.job;
  const {
    logo,
    company,
    featured,
    position,
    postedAt,
    contract,
    location,
  } = job;
  const isNew = job.new;

  return (
    <div className="column">
      <img src={require(`../assets/images/${logo}`)} alt="" />
      <div className="card">
        <div className="card-content">
          <span className="tag has-text-primary-dark has-text-weight-semibold is-medium">
            {company}
          </span>
          <span className="tag">
            {isNew === "true" && <span className="tag is-primary"> NEW! </span>}{" "}
          </span>
          <span className="tag">
            {featured === "true" && (
              <span className="tag is-dark"> FEATRUED </span>
            )}
          </span>

          <h4 className="title is-4">{position}</h4>
        </div>
        <div className="card-footer">
          {" "}
          <p className="card-footer-item">
            <span className="has-text-grey-light has-text-weight-semibold">
              {postedAt}
            </span>
          </p>
          <p className="card-footer-item has-text-weight-semibold">
            <span className="has-text-grey-light">{contract}</span>
          </p>
          <p className="card-footer-item">
            <span className="has-text-grey-light has-text-weight-semibold">
              {location}
            </span>
          </p>
        </div>
      </div>
      <hr size="1" width="40%" />
    </div>
  );
}

export default ShowJobListings;
