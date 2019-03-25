import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import farmr from '../../assets/Taryn-Li-Farmr-Project.png';
import activityfindr from '../../assets/Taryn-Li-ActivityFindr-Project.png';
import TopNav from '../Nav/Top/TopNav';
import './projectsLanding.scss';

export default class Projects extends Component {
	render () {
		return (
			<section>
				<TopNav />
				<div className='projects'>
					<h1>Below are some projects I've worked on</h1>
					<div className='table'>
						<ul>
							<li>
								<Link to={'/farmr'} className='link'>
									<img src={farmr} alt='Taryn Li - Farmr' className='macbook' />
									<h2>Farmr - Capstone</h2>
								</Link>
							</li>
							<li>
								<Link to={'/activityfindr'} className='link'>
									<img src={activityfindr} alt='Taryn Li - ActivityFindr' className='imac' />
									<h2>Activity Findr - Paired Programming</h2>
								</Link>
							</li>
							<li>
								<p>Coming soon</p>
							</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}
