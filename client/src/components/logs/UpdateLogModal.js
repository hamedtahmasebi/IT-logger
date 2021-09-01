import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { updateLog } from "../../actions/logActions";
export const UpdateLogModal = ({ updateLog, currentLog, techs, loading }) => {
  const [msg, setMsg] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);
  const date = dayjs().format("dddd DD MMMM YYYY h:mm A");

  //   set state values to current log values
  useEffect(() => {
    if (currentLog) {
      setMsg(currentLog.msg);
      setTech(currentLog.tech);
      setAttention(currentLog.attention);
    }
  }, [currentLog]);

  const onSubmit = () => {
    if (msg === "" || tech === "") {
      M.toast({ html: "Please Enter a message and tech" });
    } else {
      const newLog = {
        _id: currentLog._id,
        msg,
        tech,
        attention,
        date,
      };
      updateLog(newLog);
      M.toast({ html: "log updated succeccfuly" });
      // Clear Fields
      setMsg("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div
      id="update-log-modal"
      className="modal padding-form"
      style={modalStyles}
    >
      <div className="moadal-content">
        <h4>Update Log</h4>
        <div className="row mt-2xl">
          <div className="input-field">
            <span className="helper-text" data-success="right">
              Log message
            </span>
            <input
              name="msg"
              value={msg}
              onChange={e => setMsg(e.target.value)}
              type="text"
              minLength="6"
            />
          </div>
        </div>
        <div className="row ">
          <div className="input-field">
            <span className="grey-text">Technician</span>
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => {
                setTech(e.target.value);
              }}
            >
              <option value="selectTech" disabled>
                Select technician
              </option>
              {!loading &&
                techs !== null &&
                techs.map(tech => (
                  <option
                    value={`${tech.firstName} ${tech.lastName}`}
                  >{`${tech.firstName} ${tech.lastName}`}</option>
                ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer " style={{ padding: "0" }}>
        <a
          onClick={onSubmit}
          href="#!"
          className="modal-close waves-effect blue white-text btn"
        >
          Submit
        </a>
      </div>
    </div>
  );
};

const modalStyles = {
  width: "75%",
  height: "min-content",
};
const mapStateToProps = state => ({
  currentLog: state.log.currentLog,
  techs: state.tech.techs,
  loading: state.tech.loading,
});
export default connect(mapStateToProps, { updateLog })(UpdateLogModal);
