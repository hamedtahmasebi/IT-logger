import {
  GET_TECHS,
  ADD_TECH,
  TECHS_ERROR,
  SET_LOADING,
  DELETE_TECH,
} from "./types";

export const setLoading = () => dispatch => {
  dispatch({ type: SET_LOADING });
};

export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();

    const reversed = data.reverse();
    dispatch({ type: GET_TECHS, payload: reversed });
  } catch (err) {
    console.log(err);
    dispatch({ type: TECHS_ERROR, payload: err });
  }
};

export const addTech = tech => async dispatch => {
  try {
    const res = await fetch("/techs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tech),
    });
    const data = res.json();
    dispatch({ type: ADD_TECH, payload: data });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err });
  }
};

export const deleteTech = _id => async dispatch => {
  try {
    const theId = { _id: _id };
    await fetch(`/techs`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theId),
    });
    dispatch({ type: DELETE_TECH, payload: _id });
  } catch (err) {
    dispatch({ TECHS_ERROR, payload: err });
  }
};
