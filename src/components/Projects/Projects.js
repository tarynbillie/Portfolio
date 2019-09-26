import React, { Component } from 'react';
import farmr from '../../assets/farmr.png';
import rover from '../../assets/Dribbble.png';
import linqu from '../../assets/linq-u.png';
import activityfindr from '../../assets/activity-findr.png';
import thisDot from '../../assets/this-dot.svg';
import {
	MDBBtn,
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBModalFooter,
	MDBMask,
	MDBView,
	MDBContainer,
	MDBRow,
	MDBCol
} from 'mdbreact';
import TopNav from '../Nav/Top/TopNav';
import './projectsLanding.scss';

export default class Projects extends Component {
	state = {
		isOpen: false,
		modal1: false,
		modal2: false,
		modal3: false,
		modal4: false,
		modal5: false,

	};

	toggle = (nr) => () => {
		let modalNumber = 'modal' + nr;
		this.setState({
			[modalNumber]: !this.state[modalNumber]
		});
	};

	showModal = () => {
		this.setState({
			isOpen: true
		});
	};

	closeModal = () => {
		this.setState({
			isOpen: false
		});
	};

	render() {
		return (
			<section>
				<TopNav />
				<div className='projects'>
					<h1>Projects</h1>
					<div className='table'>
						<MDBContainer className='mt-5'>
							<MDBRow>
								<MDBCol md='4'>
									<MDBView hover>
										<img src={farmr} className='img-fluid' alt='farmr project' />
										<MDBMask className='flex-center' overlay='black'>
											<p className='white-text'>
												<MDBBtn color='primary' onClick={this.toggle(1)}>
													Learn more
												</MDBBtn>
											</p>
										</MDBMask>
									</MDBView>
								</MDBCol>
								<MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered>
									<MDBModalHeader toggle={this.toggle(1)}>Farmr</MDBModalHeader>
									<MDBModalBody>
										<p>
											Directly connect to your farm fresh supplier. Making “farm to table” more
											achievable and less time-consuming!
										</p>
										<p> MERN Stack — MongoDB, Express, React, Node, JavaScript, SASS.</p>
										<p> NPM packages — JWT, bcrypt, cors, sendgrid/mail, mongoose.</p>
									</MDBModalBody>
									<MDBModalFooter>
										<MDBBtn
											href='https://medium.com/@tarynli/farmr-case-study-c359e3fa1701'
											target='_blank'>
											Case study
										</MDBBtn>
										<MDBBtn color='secondary' onClick={this.toggle(1)}>
											Close
										</MDBBtn>
									</MDBModalFooter>
								</MDBModal>
								<MDBCol md='4'>
									<MDBView hover>
										<img src={activityfindr} className='img-fluid' alt='activity findr project' />
										<MDBMask className='flex-center' overlay='black'>
											<p className='white-text'>
												<MDBBtn color='primary' onClick={this.toggle(2)}>
													Learn more
												</MDBBtn>
											</p>
										</MDBMask>
									</MDBView>
								</MDBCol>
								<MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} centered>
									<MDBModalHeader toggle={this.toggle(2)}>Activity Findr</MDBModalHeader>
									<MDBModalBody>
										<p>
											Go onto Activity Findr, fill in a general idea of what you would like to do,
											your price range, location/ how far you’re willing to go, and Activity Findr
											will do the rest for you. Giving you suggestions with ratings, and a
											convenient map showing you where the establishment is located.
										</p>
										<p> Stack — React, JavaScript, HTML5, SASS, Express, Node.</p>
										<p>
											NPM packages — cors, rapidapi-connect, apollo-boost, graphql,
											google-maps-react, react-star-rating-component, react-router-dom.
										</p>
									</MDBModalBody>
									<MDBModalFooter>
										<MDBBtn
											href='https://medium.com/@tarynli/farmr-case-study-c359e3fa1701'
											target='_blank'>
											Case study
										</MDBBtn>
										<MDBBtn color='secondary' onClick={this.toggle(2)}>
											Close
										</MDBBtn>
									</MDBModalFooter>
								</MDBModal>
								<MDBCol md='4'>
									<MDBView hover>
										<img src={linqu} className='img-fluid' alt='linq-u' />
										<MDBMask className='flex-center' overlay='black'>
											<p className='white-text'>
												<MDBBtn color='primary' onClick={this.toggle(3)}>
													Learn more
												</MDBBtn>
											</p>
										</MDBMask>
									</MDBView>
								</MDBCol>
								<MDBModal isOpen={this.state.modal3} toggle={this.toggle(3)} centered>
									<MDBModalHeader toggle={this.toggle(3)}>LINQ-U</MDBModalHeader>
									<MDBModalBody>
										<p>
											LINQ-U is an early stage Saas start up. Letting clients schedule
											appointments with a trusted partner in the health and beauty business, and
											have their technicians come to YOU! This is LINQ-U's basic website that
											isn't fully functioning yet.
										</p>
										<p> Stack - React, JavaScript, HTML5, SASS.</p>
										<p> NPM packages — react-router-dom, node-sass, mdbreact.</p>
									</MDBModalBody>
									<MDBModalFooter>
										<MDBBtn href='http://www.nececities.com/#/home' target='_blank'>
											Website
										</MDBBtn>
										<MDBBtn color='secondary' onClick={this.toggle(3)}>
											Close
										</MDBBtn>
									</MDBModalFooter>
								</MDBModal>
								<MDBCol md='4'>
									<MDBView hover>
										<img src={rover} className='img-fluid' alt='Rover - UI project' />
										<MDBMask className='flex-center' overlay='black'>
											<p className='white-text'>
												<MDBBtn color='primary' onClick={this.toggle(4)}>
													Learn more
												</MDBBtn>
											</p>
										</MDBMask>
									</MDBView>
								</MDBCol>
								<MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)} centered>
									<MDBModalHeader toggle={this.toggle(4)}>Rover - UI Design</MDBModalHeader>
									<MDBModalBody>
										<p>
											Rover is a User Interface Design project. I created a style guide for this
											project in order to make the designing seemless and cohesive. The problem
											that Rover solves is that there is no online travel agency for luxury space
											travel. Rover is perfect for those who would want to have a stress-free
											experience planning their trip into the galaxy.
										</p>
										<p>
											For the first time, humans will be able to browse and easily book a curated
											luxury space travel experience online. We would be providing a user-friendly
											interface to allow space exploration for the elite.
										</p>
										<p> Made in Sketch App!</p>
										<p> Inspo — Carbon Design Systems, Material Design, 1920-1940s Art Deco.</p>
										<p>
											<b>Contact me if you'd like to see my style guide!</b>
										</p>
									</MDBModalBody>
									<MDBModalFooter>
										<MDBBtn
											href='https://dribbble.com/shots/6775335-Rover?utm_source=Clipboard_Shot&utm_campaign=tarynli&utm_content=Rover&utm_medium=Social_Share'
											target='_blank'>
											Dribbble
										</MDBBtn>
										<MDBBtn color='secondary' onClick={this.toggle(4)}>
											Close
										</MDBBtn>
									</MDBModalFooter>
								</MDBModal>
								<MDBCol md='4'>
									<MDBView hover>
										<img src={thisDot} className='img-fluid' alt='Open Source Software Contributions' />
										<MDBMask className='flex-center' overlay='black'>
											<p className='white-text'>
												<MDBBtn color='primary' onClick={this.toggle(5)}>
													Learn more
												</MDBBtn>
											</p>
										</MDBMask>
									</MDBView>
								</MDBCol>
								<MDBModal isOpen={this.state.modal5} toggle={this.toggle(5)} centered>
									<MDBModalHeader toggle={this.toggle(5)}>Software Engineer Apprentice</MDBModalHeader>
									<MDBModalBody>
										<p>
											As a software eningeer apprentice at This Dot Inc, I was tasked with integrating a visual regression testing framework called Applitools that utilizes Storybook -
											an open source tool for developing UI components in isolation for React. The integration was for an open-source software called Daedalus, which is a cryptocurrency wallet.
										</p>
										<p>
											Stack - React, JavaScript, Node, HTML5, Yarn, Git.
										</p>
										<p>
											Please check out my contribution on GitHub!
										</p>

									</MDBModalBody>
									<MDBModalFooter>
										<MDBBtn
											href='https://github.com/input-output-hk/daedalus/pull/1571'
											target='_blank'>
											GitHub
										</MDBBtn>
										<MDBBtn color='secondary' onClick={this.toggle(5)}>
											Close
										</MDBBtn>
									</MDBModalFooter>
								</MDBModal>
							</MDBRow>
						</MDBContainer>
					</div>
				</div>
			</section>
		);
	}
}
