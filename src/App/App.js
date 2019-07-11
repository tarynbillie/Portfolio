import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Home from '../components/Home/LandingPg.js';
import About from '../components/About/About.js';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import TopNav from '../components/Nav/Top/TopNav';

class App extends Component {
	render () {
		return (
			<Router>
				<div id='app' className='long'>
					<TopNav />
					<Switch>
						<Route path='/home' exact component={Home} />
						<Route path='/about' exact component={About} />
						<Route path='/projects' exact component={Projects} />
						<Route path='/contact' exact component={Contact} />
						<Route path={'/'} render={() => <Redirect to='/home' />} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
