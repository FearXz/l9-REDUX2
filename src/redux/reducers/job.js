/* import { FETCH_JOBS } from "../action/action";

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

export default JobReducer; */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  status: "idle",
};

const fetchJobSlice = createSlice({
  name: "fetchJob",
  initialState,
  reducers: {
    // Azione definita nello slice
    fetchJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

// Esporto solo l'azione definita nello slice
export const { fetchJobs } = fetchJobSlice.actions;
export default fetchJobSlice.reducer;
