import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
