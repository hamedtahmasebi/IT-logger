import React from "react";
import { Link } from "react-router-dom";
export const TasksButtons = () => {
  return (
    <ul className="tasks-buttons">
      <li>
        <a href="#new-log-modal" className="btn red modal-trigger task-btn">
          <i className="material-icons">add</i>
          Add Log
        </a>
      </li>
      <li>
        <a
          href="#tech-list-modal"
          className="btn  orange darken-2 modal-trigger task-btn"
        >
          <i className="material-icons">person</i>
          Technicians List
        </a>
      </li>
      <li>
        <a
          href="#add-tech-modal"
          className="btn teal darken-1 modal-trigger task-btn"
        >
          <i className="material-icons">person_add</i>
          Add Technician
        </a>
      </li>
      <li>
        <Link to="/about" className="btn blue white-text darken-2 task-btn">
          About
        </Link>
      </li>
    </ul>
  );
};

export default TasksButtons;
