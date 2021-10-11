import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Link, Switch, Route } from "react-router-dom"
import Home from "./Home.js"
import Recent from "./Recent.js"
import Notable from "./Notable.js"
import Baywalk from "./Baywalk.js"
import Regions from "./Regions.js"


const App = () => {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recent">Recent</Link>
        <Link to="/notable">Notable</Link>
        <Link to="/baywalk">Species List</Link>
        <Link to="/regions">Find a Region ID</Link>
      </nav>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/recent"><Recent /></Route>
        <Route exact path="/notable"><Notable /></Route>
        <Route exact path="/baywalk"><Baywalk /></Route>
        <Route exact path="/regions"><Regions /></Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);
