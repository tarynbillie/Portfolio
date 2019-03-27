import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {
	render () {
		return (
			<div className='footer'>
				<svg
					width='1801px'
					height='86px'
					viewBox='0 0 1801 86'
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
						<path
							d='M0.144829861,85.0401181 C92.4584821,28.8102477 220.880295,0.6953125 385.410269,0.6953125 C632.205229,0.6953125 748.757266,69.0706169 974.649808,69.0706169 C1200.54235,69.0706169 1305.146,36.4876829 1504.16287,36.4876829 C1703.17973,36.4876829 1793.75706,83.7297294 1799.73075,85.0401181 C1803.71321,85.9137106 1778.96947,85.9137106 1725.49953,85.0401181 L0.144829861,85.0401181 Z'
							id='Path'
							fill='#E3F6ED'
						/>
					</g>
				</svg>
				<h1>Get in Touch</h1>
				<h2>tarynbillie@gmail.com</h2>
				<h2>519 212 2052</h2>
				<div className='footer__links'>
					<a href='https://github.com/tarynbillie' target='_blank' rel='noopener noreferrer'>
						<h3>GitHub</h3>
					</a>
					<a href='https://www.linkedin.com/in/taryn-li/' target='_blank' rel='noopener noreferrer'>
						<h3>LinkedIn</h3>
					</a>
					<a href='https://www.instagram.com/tarynbillie/' target='_blank' rel='noopener noreferrer'>
						<h3>Instagram</h3>
					</a>
				</div>
				<small>© 2019 | Created and coded by Taryn Li | All rights reserved.</small>
			</div>
		);
	}
}
