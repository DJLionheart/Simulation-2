import React, { Component } from 'react';
//import { connect } from 'react-redux'
import { HashRouter } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import routes from './route';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HashRouter>
          { routes }
        </HashRouter>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return state;
// }

export default App; //connect(mapStateToProps)(App);
