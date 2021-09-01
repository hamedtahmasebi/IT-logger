import React, { useState } from "react";
import dayjs from "dayjs";
import M from "materialize-css/dist/js/materialize.min.js";
import { addTech, getTechs } from "../../actions/techActions";
import { connect } from "react-redux";
const AddTechModal = ({ addTech, techs }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const date = dayjs().format("dddd DD MMMM YYYY h:mm A");

  const newTech = {
    firstName,
    lastName,
    addedDate: date,
  };

  function onSubmit() {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please Enter first and last name" });
    } else {
      addTech(newTech);
      // Clear Fields
      setFirstName("");
      setLastName("");
      window.location.reload();
    }
  }

  return (
    <div
      id="add-tech-modal"
      className="modal padding-form"
      style={{ height: "min-content" }}
    >
      <div className="moadal-content">
        <h4>Add New Technician</h4>
        <div className="row  mt-2xl">
          <div className="input-field">
            <input
              name="firstName"
              value={firstName}
              onChange={e => {
                setFirstName(e.target.value);
              }}
              type="text"
              minLength="2"
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row  mt-2xl">
          <div className="input-field">
            <input
              name="lastName"
              value={lastName}
              onChange={e => {
                setLastName(e.target.value);
              }}
              type="text"
              minLength="2"
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer" style={{ padding: "0" }}>
        <a
          onClick={onSubmit}
          href="#!"
          className="modal-close waves-effect blue btn white-text"
        >
          Add Technician
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  techs: state.tech.techs,
});

export default connect(mapStateToProps, { getTechs, addTech })(AddTechModal);
