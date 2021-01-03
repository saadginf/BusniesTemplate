import "./App.css";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
