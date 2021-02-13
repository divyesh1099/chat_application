// Login.js

import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Chat from './Chat';
const [username, setUsername]= useState('Guest');

class Login extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Login</h2>
          <form>
            <input name="firstName" type="text" placeholder="First Name" />
            <input name="lastName" type="text" placeholder="Last Name" />
            <button type="submit">Login</button>
          </form>
        </div>
        <li><Link to={'/chat'} className="nav-link">Chat</Link></li>
        <Switch>
        <Route path='/chat' component={Chat} />

        </Switch>
      </Router>
        
    );
  }
}

export default Login;