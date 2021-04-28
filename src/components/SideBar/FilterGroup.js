import React from "react";
import "./filter-group.css";

import FilterButton from "./FilterButton";

const FilterGroup = ({ title, filters }) => (
  <div className="filter-group">
    <div className="title">{title}</div>
    <div className="filters">
      {filters.map((filter, index) => {
        return (
          <FilterButton
            filterName={filter.filterName}
            filterValue={filter.filterValue}
            type={filter.type}
            action={() => {
              alert(`${filter.filterName}`);
            }}
            key={index}
          />
        );
      })}
    </div>
  </div>
);

export default FilterGroup;
