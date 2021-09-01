import React, { useEffect } from "react";
import LogItem from "./LogItem";
import { connect } from "react-redux";
import PreLoader from "../layout/PreLoader";
import { getLogs } from "../../actions/logActions";

export const Logs = ({ log: { logs, loading, filtered }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }

  return (
    <div className="logs-container">
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <h4 style={{ textAlign: "center" }}>No logs to show</h4>
        ) : !loading && filtered !== null ? (
          filtered.map(theLog => <LogItem theLog={theLog} key={theLog.id} />)
        ) : (
          logs.map(theLog => <LogItem theLog={theLog} key={theLog.id} />)
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
