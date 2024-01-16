import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};

const fetchJobSlice = createSlice({
  name: "fetchJob",
  initialState,
  reducers: {
    fetchJob: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const fetchJobs = (url, query) => async (dispatch) => {
  try {
    const response = await fetch(url + query + "&limit=20");

    if (response.ok) {
      const { data } = await response.json();
      dispatch(fetchJob(data));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {}
};

export const { fetchJob } = fetchJobSlice.actions;
export default fetchJobSlice.reducer;
