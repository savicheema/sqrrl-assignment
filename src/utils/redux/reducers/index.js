export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_YEAR":
      return {
        ...state,
        year: action.payload,
      };
    case "SET_FILTER_LAUNCH":
      return {
        ...state,
        launchSuccess: action.payload,
      };
    case "SET_FILTER_LANDING":
      return {
        ...state,
        landingSuccess: action.payload,
      };
    default:
      return state;
  }
};

export const spacexReducer = (state, action) => {
  switch (action.type) {
    case "SET_SPACE_X":
      return {
        ...state,
        spaceX: action.payload,
      };
    default:
      return state;
  }
};

export const loaderReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADER":
      return {
        ...state,
        isLoader: action.payload,
      };
    default:
      return state;
  }
};
