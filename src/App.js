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

  const deleteUserHandler = id => {
    console.log(`deleted ${id}`);
    // var book = this.state.bookList;
    // book.splice(event.target.id, 1);
    // this.setState({ bookList: book });
    users.splice(id, 1);
    console.log(users);
    setUsers(users);
  };

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
            <AdminDashboard
              users={users.length === 0 ? null : users}
              deleteUserHandler={deleteUserHandler}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
