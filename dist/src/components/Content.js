import React from "react";
import JobCard from "./JobCard";
import jobsListingData from "../data.json";

function Content() {
  const jobCardComponents = jobsListingData.map((job) => (
    <JobCard
      key={job.id}
      company={job.company}
      logo={job.logo}
      new={job.new}
      featured={job.featured}
      position={job.position}
      role={job.role}
      postedOn={job.postedAt}
      fulltime={job.contract}
      region={job.location}
      languages={job.languages}
      tools={job.tools}
    />
  ));

  return (
    <div className="content">
      <div className="jobCardList">{jobCardComponents}</div>
    </div>
  );
}

export default Content;
