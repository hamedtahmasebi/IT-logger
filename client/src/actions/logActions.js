import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  SET_CURRENT,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  CLEAR_FILTER,
} from "./types";

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();
    const reversed = data.reverse();
    dispatch({
      type: GET_LOGS,
      payload: reversed,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};

export const addLog = log => async dispatch => {
  try {
    const res = await fetch("/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log),
    });
    const addedLog = await res.json();
    dispatch({ type: ADD_LOG, payload: addedLog });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err });
  }
};

export const deleteLog = _id => async dispatch => {
  const theId = { _id: _id };
  try {
    await fetch(`/logs`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(theId),
    });
    dispatch({ type: DELETE_LOG, payload: _id });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err });
  }
};

export const updateLog = log => async dispatch => {
  try {
    const res = await fetch(`/logs`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log),
    });
    const updatedLog = await res.json();
    dispatch({ type: UPDATE_LOG, payload: updatedLog });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err });
  }
};

export const searchLogs = text => async dispatch => {
  try {
    dispatch({ type: SEARCH_LOGS, payload: text });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err });
  }
};

export const clearFilter = () => dispatch => {
  dispatch({ type: CLEAR_FILTER, payload: null });
};

export const setCurrentLog = log => async dispatch => {
  try {
    dispatch({ type: SET_CURRENT, payload: log });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err });
  }
};
