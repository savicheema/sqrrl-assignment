import React from "react";
import "./filter-button.css";

import {
  filterStore,
  setFilterYear,
  setFilterLaunch,
  setFilterLanding,
} from "../../utils/redux";

const FilterButton = ({ action, filterName, filterValue, type }) => {
  const setThisButtonFilter = () => {
    switch (type) {
      case "year": {
        filterStore.dispatch(setFilterYear(filterValue));
        break;
      }
      case "landing": {
        filterStore.dispatch(setFilterLanding(filterValue));
        break;
      }
      case "launch": {
        filterStore.dispatch(setFilterLaunch(filterValue));
        break;
      }
      case "reset": {
        filterStore.dispatch(setFilterYear(null));
        filterStore.dispatch(setFilterLanding(null));
        filterStore.dispatch(setFilterLaunch(null));
        break;
      }
      default: {
        console.error("filter switch error");
      }
    }
  };

  const filterButtonClass = type === "reset" ? "filter-reset" : "filter-button";

  return (
    <button className={filterButtonClass} onClick={setThisButtonFilter}>
      {filterName}
    </button>
  );
};

export default FilterButton;
