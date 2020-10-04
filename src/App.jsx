import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Room from './components/Room.jsx';
import './App.css';

function App() {
  return (
    <>
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <span class="navbar-brand mb-0 h1">Portail Etudiant</span>
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Accueil</Link></li>
            <li><Link to={'/room'} className="nav-link">Salles</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/room' component={Room} />
          </Switch>
        </div>
      </Router>
      </>

  );
}

export default App;
