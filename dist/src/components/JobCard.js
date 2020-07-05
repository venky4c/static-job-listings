import React, { useState } from "react";

function JobCard(props) {
  const { logo } = props;
  const [reqLangs, setReqLangs] = useState([]);

  return (
    <div className="jobCards">
      <img src={require(`../assets/images/${logo}`)} alt="" />
      <div className="row1">
        <div className="company">{props.company}</div>
        <span className="isNew">
          {props.new === "true" && <label> NEW! </label>}{" "}
        </span>
        <span className="isFeatured">
          {props.featured === "true" && <label> FEATRUED </label>}
        </span>
      </div>
      <h4>{props.position}</h4>
      <p>
        {" "}
        {props.postedOn} {props.fulltime} {props.region}
      </p>
      <hr size="1" width="40%" />
      <p>
        <span className="languages">
          {props.languages.map((value, index) => (
            <button key={index}>{value}</button>
          ))}

          {props.tools.map((value, index) => (
            <button key={index}>{value}</button>
          ))}
        </span>
      </p>
      <hr size="1" width="80%" />
    </div>
  );
}

export default JobCard;
