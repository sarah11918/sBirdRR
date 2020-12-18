import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Link, Switch, Route } from "react-router-dom"
import Home from "./Home.js"
import Recent from "./Recent.js"
import Notable from "./Notable.js"
import Backyard from "./Backyard.js"
import Harbour from "./Harbour.js"
import Baywalk from "./Baywalk.js"


const App = () => {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recent">Recent</Link>
        <Link to="/notable">Notable</Link>
        <Link to="/backyard">Backyard</Link>
        <Link to="/harbour">Harbour</Link>
        <Link to="/baywalk">Baywalk</Link>
      </nav>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/recent"><Recent /></Route>
        <Route exact path="/notable"><Notable /></Route>
        <Route exact path="/backyard"><Backyard /></Route>
        <Route exact path="/harbour"><Harbour /></Route>
        <Route exact path="/baywalk"><Baywalk /></Route>
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
