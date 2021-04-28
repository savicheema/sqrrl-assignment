import { createStore } from "redux";
import { filterReducer, spacexReducer } from "../reducers";

const initFilter = {
  year: null,
  landingSuccess: null,
  launchSuccess: null,
};

export const filterStore = createStore(filterReducer, initFilter);

const initSpaceX = {
  spaceX: [],
};

export const spacexStore = createStore(spacexReducer, initSpaceX);
