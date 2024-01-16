import { FETCH_JOBS } from "../action/action";

const initialState = {
  jobs: [],
};

const JobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};

export default JobReducer;
