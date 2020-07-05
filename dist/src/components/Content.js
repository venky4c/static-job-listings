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

  const data = [...jobsListingData];
  //console.log(data);

  function filterJobs(criteria) {
    Object.keys(data).map((value, key) => {
      data[key].tools.filter((tool) => {
        if (tool === criteria) {
          console.log(data[key]);
          return tool;
        }
      });

      return null;
    });
  }
  filterJobs("React");

  return (
    <div className="content">
      <div className="jobCardList">
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength="4"
          maxLength="12"
          size="20"
        ></input>
        {jobCardComponents}
      </div>
    </div>
  );
}

export default Content;
