/* export const FETCH_JOBS = "FETCH_JOBS";

export const fetchJobsAction = (url, query) => async (dispatch) => {
  try {
    const response = await fetch(url + query + "&limit=20");

    if (response.ok) {
      const { data } = await response.json();
      dispatch({ type: FETCH_JOBS, payload: data });
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {}
}; */
import { fetchJobs } from "../reducers/job";
export const fetchJobsAction = (url, query) => async (dispatch) => {
  try {
    const response = await fetch(url + query + "&limit=20");

    if (response.ok) {
      const { data } = await response.json();
      dispatch(fetchJobs(data));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};
