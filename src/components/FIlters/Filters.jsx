import React from "react";
import FilterButton from "../FilterButton/FilterButton";
import "./Filters.scss";

const Filters = (props) => {
  const { filters, removeFilter, clearFilters } = props;

  let renderFilters = filters?.map((filter, i) => (
    // <li key={i}>
    //   {filter}
    //   <span>
    //     <button onClick={() => removeFilter(filter)}>X</button>
    //   </span>
    // </li>
    <FilterButton filter={filter} key={i} removeFilter={removeFilter} />
  ));

  return (
    <>
      {filters.length ? (
        <div className="filtersContainer">
          <ul className="filterList">{renderFilters}</ul>
          <a onClick={clearFilters} className="clearBtn">
            Clear
          </a>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Filters;
