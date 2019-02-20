import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Home from '../components/Home/LandingPg.js';
import Farmr from '../components/Projects/Farmr/Farmr.js';
import About from '../components/About/About.js';
import Projects from '../components/Projects/Projects';
import ActivityFindr from '../components/Projects/Activity/ActivityFindr';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="app" className='long'>
          <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/farmr' exact component={Farmr} />
            <Route path='/activityfindr' exact component={ActivityFindr} />
            <Route path={'/'} render={() => <Redirect to='/home' />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
