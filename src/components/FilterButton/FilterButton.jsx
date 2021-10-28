import React from "react";
import "./FilterButton.scss";

const FilterButton = (props) => {
  return (
    <li className="filterBtn">
      <span className="filterName">{props.filter}</span>
      <img
        src={process.env.PUBLIC_URL + "/assets/images/icon-remove.svg"}
        alt="remove icon"
        className="removeBtn"
        onClick={() => props.removeFilter(props.filter)}
      />
    </li>
  );
};

export default FilterButton;
