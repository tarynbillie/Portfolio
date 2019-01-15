import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Home/LandingPg.js';
import Farmr from './Projects/Farmr.js';
import About from './About/About.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="app" className='long'>
          <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/projects' exact component={Farmr} />
            <Route path={'/'} render={() => <Redirect to='/home' />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
