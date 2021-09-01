import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";

export const SearchBar = ({ searchLogs }) => {
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    if (searchText !== null) {
      searchLogs(searchText);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <nav className="blue lighten-2">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i
              onClick={e => {
                setSearchText("");
              }}
              className="material-icons"
            >
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(null, { searchLogs })(SearchBar);
