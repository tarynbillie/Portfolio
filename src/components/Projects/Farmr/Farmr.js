import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import PropTypes from 'prop-types';
import closebtn from '../../assets/close.svg';
import Footer from '../../Footer/Footer';
import '../../Nav/Side/sideNav.scss';
import '../projects.scss';

export default class Farmr extends Component {
	constructor () {
		super();
		this.missionRef = React.createRef();
		this.challengeRef = React.createRef();
		this.codeRef = React.createRef();
		this.conclusionRef = React.createRef();
		this.contactRef = React.createRef();
	}
	scroll (ref) {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}

	scrollToTop = () => {
		scroll.scrollToTop();
	};

	render () {
		return (
			<div
				style={{
					...flex,
					display:
						this.props.Open ? 'flex' :
						'none'
				}}>
				<div className='modal-layer' onClick={this.props.handleClose} style={modalLayer} />
				<div className='form-container' style={formModal}>
					<div className='form-container__close'>
						<img src={closebtn} alt='close' onClick={this.props.handleClose} />
					</div>
					<h1>Leave a message</h1>
					<form method='POST' action='https://formspree.io/tarynbillie@gmail.com'>
						<label>
							Name
							<input type='text' name='name' />
						</label>
						<label>
							Email address
							<input type='email' name='email' />
						</label>
						<label>
							Message
							<textarea type='message' name='message' />
						</label>
						<div className='btn'>
							<button type='submit' onClick={this.props.handleClose}>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

Farmr.propTypes = {
	handleClose: PropTypes.func.isRequired,
	Open: PropTypes.bool.isRequired
};

const flex = {
	position: 'fixed',
	top: 0,
	left: 0,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100vw',
	height: '100vh',
	zIndex: 20,
	overflow: 'hidden',
	backgroundColor: 'rgba(57,57,57,0.6)'
};

const modalLayer = {
	position: 'fixed',
	width: '100vw',
	height: '100vh',
	zIndex: 20,
	backgroundColor: 'transparent'
};

const formModal = {
	position: 'absolute',
	color: 'rgb(57,57,57)',
	backgroundColor: '#FFFFFF',
	width: '550px',
	maxWidth: '100%',
	maxHeight: '100%',
	zIndex: 20,
	borderRadius: '8px',
	overflow: 'auto',
	display: 'flex',
	flexDirection: 'column'
};
