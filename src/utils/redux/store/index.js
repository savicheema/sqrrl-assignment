import { createStore } from "redux";
import { filterReducer, spacexReducer, loaderReducer } from "../reducers";

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

const initLoader = {
  isLoader: false,
};

export const loaderStore = createStore(loaderReducer, initLoader);
