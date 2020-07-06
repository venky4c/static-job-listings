import React from "react";

function ShowJobListings(props) {
  const job = props.job;
  const logo = job.logo;
  const company = job.company;
  const isNew = job.isNew;
  const featured = job.featured;
  const position = job.position;
  const postedAt = job.postedAt;
  const contract = job.contract;
  const location = job.location;

  return (
    <div className="column">
      <img src={require(`../assets/images/${logo}`)} alt="" />
      <div className="card">
        <div className="card-content">
          <span className="tag is-white is-medium">{company}</span>
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
            <span>{postedAt}</span>
          </p>
          <p className="card-footer-item">
            <span>{contract}</span>
          </p>
          <p className="card-footer-item">
            <span>{location}</span>
          </p>
        </div>
      </div>
      <hr size="1" width="40%" />
    </div>
  );
}

export default ShowJobListings;
