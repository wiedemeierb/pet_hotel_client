import React, { Component } from 'react';
// import { HashRouter as Router, Route, Redirect, Switch, } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <h1>Pet Hotel - Python</h1>
        </div>
      </Router>
    )
  }
}

export default connect()(App);
