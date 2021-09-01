import React from "react";
import * as dayjs from "dayjs";
import { connect } from "react-redux";
import { setCurrentLog } from "../../actions/logActions";
dayjs().format();

export const LogItem = ({
  theLog,
  currentLog,
  logs,
  setCurrentLog,
  showDelete = true,
}) => {
  return (
    <li className="collection-item">
      {/* <div> */}
      <div
        className={` font-size-m bold-5 ${
          theLog.attention ? "red-text" : "blue-text"
        }`}
      >
        {theLog.msg}
        {theLog.attention && (
          <span className="red-text attention-mark">
            {" "}
            <i
              style={{ fontSize: "22px", verticalAlign: "sub" }}
              className="material-icons"
            >
              error
            </i>
          </span>
        )}
      </div>
      <br />
      <div className="mt-m ">
        <span className=" grey-text log-item">
          <span className="black-text bold-5">ID #{theLog._id}</span>
          <span className="black-text bold-5">
            <span className="grey-text light-4"> last updated by </span>
            {theLog.tech}
          </span>{" "}
          <span className="black-text bold-5">
            <span className="grey-text light-4">on </span>
            {theLog.date}
          </span>
        </span>
        {showDelete && (
          <div className="secondary-content flex mt-l log-btns-div">
            <a
              href="#delete-log-confirm-modal"
              className="modal-trigger btn red lighten-1 flex delete-btn"
              onClick={e => setCurrentLog(theLog)}
            >
              <i className="material-icons white-text">delete</i>
              Delete
            </a>
            <a
              href="#update-log-modal"
              className="modal-trigger btn black-text grey lighten-2 flex "
              onClick={e => setCurrentLog(theLog)}
              style={{ margin: "0 8px" }}
            >
              <i className="material-icons black-text">edit</i>
              Edit
            </a>
          </div>
        )}
      </div>
      {/* </div> */}
    </li>
  );
};

const mapStateToProps = state => ({
  currentLog: state.log.currentLog,
  logs: state.log.logs,
});

export default connect(mapStateToProps, { setCurrentLog })(LogItem);
