import React, { useState, useEffect } from "react";
import "./JobListings.scss";
import Filters from "../FIlters/Filters";
import Job from "../Job/Job";
import data from "../../data.json";

const JobListings = (props) => {
  let [filters, setFilters] = useState([]);
  // console.log(filters);
  // console.log(data);

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

  let jobs = data?.map((job) => (
    <Job key={job.id} job={job} addFilter={addFilter} />
  ));

  let filterJobs = () => {
    const languages = ["JavaScript", "Python", "HTML", "CSS", "Ruby"];
    // console.log(
    //   data.filter(
    //     (job) =>
    //       Object.values(job).includes(filters[0]) ||
    //       job.languages.includes(filters[0])
    //   )
    // );

    let languageFilteredJobs = [];
    let finalFilter = [];

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < filters.length; j++) {
        if (languages.includes(filters[j])) {
          if (
            data[i].languages.includes(filters[j]) &&
            !languageFilteredJobs.includes(data[i])
          ) {
            languageFilteredJobs.push(data[i]);
          }
        }
      }
    }

    console.log(languageFilteredJobs);

    // for (let y = 0; y < languageFilteredJobs.length; y++) {
    //   for (let z = 0; z < filters.length; z++) {
    //     if (!languages.includes(filters[z])) {
    //       console.log(filters[z]);
    //       if (Object.values(languageFilteredJobs[y]).includes(filters[z])) {
    //         finalFilter.push(languageFilteredJobs[y]);
    //       }
    //     }
    //   }
    // }

    // console.log(finalFilter);
    // return finalFilter;
  };

  useEffect(() => filterJobs(), [filters]);

  return (
    <div className="main">
      <Filters
        filters={filters}
        removeFilter={removeFilter}
        clearFilters={clearFilters}
      />
      {jobs}
    </div>
  );
};

export default JobListings;
