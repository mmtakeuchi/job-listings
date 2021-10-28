import React, { useState } from "react";
import "./JobListings.scss";
import Filters from "../FIlters/Filters";
import Job from "../Job/Job";
import data from "../../data.json";

const JobListings = () => {
  let [filters, setFilters] = useState([]);

  const addFilter = (tag) => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const removeFilter = (tag) => {
    let remainingFilters = filters.filter((filter) => filter !== tag);
    setFilters(remainingFilters);
  };

  let filteredJobs = data
    ?.filter((job) => {
      let values = [job.role, job.level, ...job.languages, ...job.tools];

      if (!filters.length) {
        return job;
      } else if (filters.every((tag) => values.indexOf(tag) !== -1)) {
        return job;
      }
    })
    .map((job) => <Job key={job.id} job={job} addFilter={addFilter} />);

  return (
    <div className="main">
      <Filters
        filters={filters}
        removeFilter={removeFilter}
        clearFilters={clearFilters}
      />
      {filteredJobs}
    </div>
  );
};

export default JobListings;
