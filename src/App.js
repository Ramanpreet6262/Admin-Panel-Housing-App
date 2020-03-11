import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';

import usersData from './Data/usersData';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => setUsers(usersData), []);

  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/admin' exact component={AdminLogin} />
        <Route
          path='/admin/dashboard'
          exact
          render={() => (
            <AdminDashboard users={users.length === 0 ? null : users} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
