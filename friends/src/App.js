import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login';

const isAuth = false;

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>{!isAuth ? <Link to="/login">Login</Link> : <></>}</li>
        </ul>

        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
