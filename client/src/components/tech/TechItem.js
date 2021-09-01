import React from "react";
import { deleteTech } from "../../actions/techActions";
import { connect } from "react-redux";
const TechItem = ({ tech, deleteTech }) => {
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a
          href="#!"
          onClick={e => deleteTech(tech._id)}
          className="secondary-content"
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTech })(TechItem);
