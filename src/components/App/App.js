import React, { Component } from 'react';
// import { HashRouter as Router, Route, Redirect, Switch, } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import ManageOwners from '../ManageOwners/ManageOwners';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route path='/' exact component={Dashboard} />
          <Route path='/ManageOwners' exact component={ManageOwners} />
        </div>
      </Router>
    )
  }
}

export default connect()(App);
