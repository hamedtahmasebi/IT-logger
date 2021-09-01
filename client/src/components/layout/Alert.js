import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
export const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { removeAlert, alert } = alertContext;
  if (alert === null) {
    return null;
  } else {
    return (
      <div
        className={`text-sm my-2 text-white bg-red-700 w-full px-1 py-0.5 mb-0.5 rounded-full`}
      >
        <i className="fas fa-exclamation-circle"></i> {alert.msg}
        <button onClick={removeAlert} className="float-right">
          <i class="far fa-times-circle"></i>
        </button>
      </div>
    );
  }
};

export default Alert;
