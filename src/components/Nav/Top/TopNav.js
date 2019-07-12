import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/T-L.svg';
import '../Hamburger/hamburger.scss';
import './topNav.scss';

export default class TopNav extends Component {
	constructor (props) {
		super(props);
		this.contactRef = React.createRef();

		this.state = {
			isOpen: false,
			isAbout: false,
			isHome: false,
			animate: false
		};
	}

	componentDidMount () {
		if (window.location.href.includes('about')) {
			this.setState({
				isAbout: true
			});
		}
	}

	render () {
		return (
			<div className='header'>
				{/* {!this.state.isAbout && ( */}
				<div>
					<NavLink to={'/home'} className='link'>
						<img src={logo} className='logo' alt='Taryn Li Logo' />
					</NavLink>
				</div>
				{/* )} */}
				<div className={`nav ${this.state.isAbout && 'isAbout'}`}>
					<NavLink to={'/home'} className='link' activeClassName='selected'>
						<h3>Home</h3>
					</NavLink>
					<NavLink to={'/about'} className='link' activeClassName='selected'>
						<h3>About</h3>
					</NavLink>
					<NavLink to={'/projects'} className='link' activeClassName='selected'>
						<h3>Projects</h3>
					</NavLink>
					<NavLink to={'contact'} className='link' activeClassName='selected'>
						<button className='contact'>Get in touch</button>
					</NavLink>
				</div>
				{/* Mobile menu STARTS */}
				<nav role='navigation'>
					<div id='menuToggle'>
						<input type='checkbox' />
						{/* hamburger */}
						<span />
						<span />
						<span />
						<ul id='menu'>
							<NavLink to={'/home'} className='link' activeClassName='selected'>
								<li>Home</li>
							</NavLink>
							<NavLink to={'/about'} className='link' activeClassName='selected'>
								<li>About me</li>
							</NavLink>
							<NavLink to={'/projects'} className='link' activeClassName='selected'>
								<li>Projects</li>
							</NavLink>
							<NavLink to={'/contact'} className='link' activeClassName='selected'>
								<li>Contact</li>
							</NavLink>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
