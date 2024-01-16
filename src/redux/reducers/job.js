import { SET_JOBS } from "../action/action";
import { setJobs } from "../action/action";

const initialState = {
  jobs: [],
};

const JobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};

export const fetchJobs = (url, query) => async (dispatch) => {
  try {
    const response = await fetch(url + query + "&limit=20");

    if (response.ok) {
      const { data } = await response.json();
      dispatch(setJobs(data));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {}
};

export default JobReducer;
