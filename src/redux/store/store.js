import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourite"; // Update the path accordingly
import jobs from "../reducers/job";

const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
    jobs: jobs,
  },
});

export default store;
