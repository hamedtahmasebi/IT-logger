import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "../actions/types";

const initialState = {
  logs: null,
  currentLog: null,
  loading: false,
  error: null,
  filtered: null,
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [action.payload, ...state.logs],
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log._id !== action.payload),
        currentLog: null,
      };
    case UPDATE_LOG:
      return {
        ...state,
        currentLog: null,
        logs: state.logs.map(log => {
          if (log._id === action.payload._id) {
            return action.payload;
          } else {
            return log;
          }
        }),
      };
    case SEARCH_LOGS:
      if (action.payload.length === 0) {
        return {
          ...state,
          filtered: null,
        };
      } else {
        return {
          ...state,
          filtered: state.logs.filter(log => {
            const regex = new RegExp(`${action.payload}`, "gi");
            return log.msg.match(regex) || log.tech.match(regex);
          }),
        };
      }
    case SET_CURRENT:
      return {
        ...state,
        currentLog: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default logReducer;
