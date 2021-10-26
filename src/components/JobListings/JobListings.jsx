import React from "react";
import "./JobListings.scss";
import Job from "../Job/Job";
import data from "../../data.json";

const JobListings = (props) => {
  let jobs = data?.map((job) => <Job key={job.id} job={job} />);

  return <div className="main">{jobs}</div>;
};

export default JobListings;
