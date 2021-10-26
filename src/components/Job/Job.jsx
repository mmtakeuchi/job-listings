import React from "react";
import "./Job.scss";

const Job = ({ job }) => {
  console.log(job);

  const jobTags = () => {
    let tags = [job.role, job.level];

    for (let i = 0; i < job.languages.length; i++) {
      tags.push(job.languages[i]);
    }

    return tags.map((tag, i) => (
      <button className="btn" key={i}>
        {tag}
      </button>
    ));
  };

  return (
    <div className="jobContainer">
      <img
        src={process.env.PUBLIC_URL + `/assets${job.logo}`}
        alt="Company Logo"
        className="logo"
      />
      <div className="jobDescription">
        <p>
          <span className="jobCompany">{job.company}</span>
          <span className={`tag ${job.new ? "new" : ""}`}>
            {job.new ? "NEW!" : ""}
          </span>
          <span className={`tag ${job.featured ? "featured" : ""}`}>
            {job.featured ? "FEATURED" : ""}
          </span>
        </p>
        <p className="jobPosition">{job.position}</p>
        <p className="jobPost">
          {job.postedAt} <span>&#8226;</span> {job.contract}{" "}
          <span>&#8226;</span> {job.location}
        </p>
      </div>
      <div className="jobTags">{jobTags()}</div>
    </div>
  );
};

export default Job;
