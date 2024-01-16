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

/* import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  status: "idle",
};

const fetchJobSlice = createSlice({
  name: "fetchJob",
  initialState,
  reducers: {
    FETCH_JOBS_SUCCESS: (state, action) => {
      state.status = "succeeded";
      state.jobs = action.payload;
    },
  },
});

export const { FETCH_JOBS_SUCCESS } = fetchJobSlice.actions;
export default fetchJobSlice.reducer; */
