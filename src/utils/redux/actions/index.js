export const setFilterYear = (year) => ({
  type: "SET_FILTER_YEAR",
  payload: year,
});

export const setFilterLaunch = (launch) => ({
  type: "SET_FILTER_LAUNCH",
  payload: launch,
});

export const setFilterLanding = (landing) => ({
  type: "SET_FILTER_LANDING",
  payload: landing,
});

export const setSpaceX = (spaceX) => ({
  type: "SET_SPACE_X",
  payload: spaceX,
});

export const setLoader = (isLoader) => ({
  type: "SET_LOADER",
  payload: isLoader,
});
