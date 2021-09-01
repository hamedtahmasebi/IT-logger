import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// Libraries
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
// Components
import About from "./components/layout/About";
import Searchbar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddLogModal from "./components/logs/AddLogModal";
import DeleteLogConfirmModal from "./components/logs/DeleteLogConfirmModal";
import AddTechModal from "./components/tech/AddTechModal";
import TechListModal from "./components/tech/TechListModal";
import UpdateLogModal from "./components/logs/UpdateLogModal";
import TasksButtons from "./components/layout/TasksButtons";
// Redux
import { Provider } from "react-redux";
import store from "./store";
function App() {
  useEffect(() => {
    // Initialize material JS
    M.AutoInit();
  });
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <div className="app-container light-blue lighten-5">
              <Searchbar />
              <TasksButtons />
              <Logs />
              <AddLogModal />
              <AddTechModal />
              <TechListModal />
              <DeleteLogConfirmModal />
              <UpdateLogModal />
            </div>
          </Route>
          <Route exact path="/about" component={About} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
