import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Chat from './components/Chat';

// function App() {
//   useEffect(()=>{
//     const name=window.prompt('Enter a username');
//     setUsername(name);
//   }, [])
  
// }

class App extends Component{
  render() {
    return (
          <Router>
            <div>
          <h2>Welcome to MD Chat Application</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Login </Link></li>
            <li><Link to={'/chat'} className="nav-link">Chat</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/chat' component={Chat} />
          </Switch>
        </div>
        </Router>

    );
  }
}
export default App;
