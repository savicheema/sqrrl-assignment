import React from "react";
import "./filter-button.css";

const FilterButton = ({ action, filterName }) => (
  <button className="filter-button" onClick={action}>
    {filterName}
  </button>
);

export default FilterButton;
