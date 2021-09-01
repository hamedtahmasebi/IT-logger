import { connect } from "react-redux";
import { deleteLog, setCurrentLog } from "../../actions/logActions";
import LogItem from "../logs/LogItem";
const DeleteLogConfirmModal = ({ deleteLog, currentLog, setCurrentLog }) => {
  return (
    <div className="modal " id="delete-log-confirm-modal">
      <div className="modal-content">
        <h4>Are you sure you want to delete this log?</h4>
        <div className="border-2 log-delete-preview">
          {currentLog !== null && (
            <LogItem theLog={currentLog} showDelete={false} />
          )}
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close red lighten-1 btn mx-1"
          onClick={e => deleteLog(currentLog._id)}
        >
          Confirm
        </a>
        <a
          href="#!"
          className="modal-close transparent red-text btn mx-1"
          style={{ boxShadow: "none" }}
          onClick={e => setCurrentLog(null)}
        >
          Cancel
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentLog: state.log.currentLog,
});

export default connect(mapStateToProps, { deleteLog, setCurrentLog })(
  DeleteLogConfirmModal
);
