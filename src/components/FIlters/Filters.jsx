import React from "react";
import FilterButton from "../FilterButton/FilterButton";
import "./Filters.scss";

const Filters = (props) => {
  const { filters, removeFilter, clearFilters } = props;

  let renderFilters = filters?.map((filter, i) => (
    <FilterButton filter={filter} key={i} removeFilter={removeFilter} />
  ));

  return (
    <>
      {filters.length ? (
        <div className="filtersContainer">
          <ul className="filterList">{renderFilters}</ul>
          <span onClick={clearFilters} className="clearBtn">
            Clear
          </span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Filters;
