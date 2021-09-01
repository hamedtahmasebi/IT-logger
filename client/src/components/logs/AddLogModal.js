import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";
import { getTechs } from "../../actions/techActions";
export const AddLogModal = ({ addLog, techs, loading }) => {
  useEffect(() => {
    getTechs();
  }, []);

  const [msg, setMsg] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);
  const date = dayjs().format("dddd DD MMMM YYYY h:mm A");
  const newLog = {
    msg,
    tech,
    attention,
    date,
  };
  function onSubmit() {
    if (msg === "" || tech === "") {
      M.toast({ html: "Please Enter a message and tech" });
    } else {
      addLog(newLog);
      M.toast({ html: "log added succeccfuly" });
      // Clear Fields
      setMsg("");
      setTech("");
      setAttention(false);
    }
  }

  return (
    <div id="new-log-modal" className="modal padding-form" style={modalStyles}>
      <div className="moadal-content">
        <h4>Enter System Log</h4>
        <div className="row  mt-2xl">
          <div className="input-field">
            <input
              name="msg"
              value={msg}
              onChange={e => {
                setMsg(e.target.value);
              }}
              type="text"
              minLength="6"
              data-error="This message is too short"
            />
            <label htmlFor="message" className="active">
              Log message
            </label>
            <span
              className="helper-text"
              data-error="This message is too short"
              data-success="right"
            ></span>
          </div>
        </div>
        <div className="row ">
          <div className="input-field">
            <span className="grey-text">Technician</span>
            <select
              name="tech"
              className="browser-default"
              defaultValue={"selectTech"}
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
                    key={tech.id}
                  >
                    {`${tech.firstName} ${tech.lastName}`}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label htmlFor="check">
                <input
                  type="checkbox"
                  name="attention"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => {
                    setAttention(!attention);
                  }}
                  id="check"
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
  techs: state.tech.techs,
  loading: state.tech.loading,
});

export default connect(mapStateToProps, { addLog, getTechs })(AddLogModal);
