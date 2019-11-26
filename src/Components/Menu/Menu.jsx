import React from 'react';
import Home from '../Home/Home';
import Qi from '../Qi/Qi';
import Sports from '../Sports/Sports';
import {
  Link, BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function Menu() {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start is-centered">
            <Router>
              <Link to="/" className="navbar-item">Home</Link>
              <Link to="/sports" className="navbar-item">Sports</Link>
              <Link to="/qi" className="navbar-item">Qi</Link>
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
                <Route path="/sports">
                  <Sports />
                </Route>
                <Route path="/qi">
                  <Qi />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu;