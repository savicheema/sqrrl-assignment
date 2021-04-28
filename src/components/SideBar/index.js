import React from "react";
import "./side-bar.css";

import FilterGroup from "./FilterGroup";
import { yearFilters, launchFilter, landingFilter } from "../../utils";

const SideBar = () => (
  <aside className="sidebar">
    <div className="title">Filters</div>

    <FilterGroup title="Launch Year" filters={yearFilters} />
    <FilterGroup title="Successful Launch" filters={launchFilter} />
    <FilterGroup title="Successful Landing" filters={landingFilter} />
  </aside>
);

export default SideBar;
