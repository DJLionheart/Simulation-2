import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';

import Header from './components/Header/Header';
import routes from './route';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { routes }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App);
