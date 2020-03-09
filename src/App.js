import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import AdminLogin from './Components/AdminLogin/AdminLogin';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/admin' component={AdminLogin} />
        </Switch>
      </div>
    );
  }
}

export default App;
