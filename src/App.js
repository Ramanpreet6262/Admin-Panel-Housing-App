import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/admin' exact component={AdminLogin} />
          <Route path='/admin/dashboard' exact component={AdminDashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
