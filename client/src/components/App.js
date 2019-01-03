import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import './Scroll/scroll.scss';
import Home from './Home/Home';
import Farmr from './Projects/Farmr';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="app" className='long'>
          <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/projects' exact component={Farmr} />
            <Route path={'/'} render={() => <Redirect to='/home' />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
