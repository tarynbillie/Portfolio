import React, { Component } from 'react';
import farmr from '../../assets/farmr.png';
import rover from '../../assets/style-guide-buttons.png';
import linqu from '../../assets/linq-u.png';
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
import activityfindr from '../../assets/activity-findr.png';
import TopNav from '../Nav/Top/TopNav';
import './projectsLanding.scss';

export default class Projects extends Component {
	constructor (props) {
		super(props);
		this.contactRef = React.createRef();

		this.state = {
			isOpen: false,
			modal14: false
		};
	}

	toggle = (nr) => () => {
		let modalNumber = 'modal' + nr;
		this.setState({
			[modalNumber]: !this.state[modalNumber]
		});
	};

	showFunction = () => {
		alert('This event is fired just before the modal is open.');
	};

	hideFunction = () => {
		alert('This event is fired just before the modal is hidden.');
	};

	hiddenFunction = () => {
		alert('This event is fired after the modal is closed.');
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

	render () {
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
												<MDBBtn color='primary' onClick={this.toggle(14)}>
													Learn more
												</MDBBtn>
											</p>
										</MDBMask>
									</MDBView>
								</MDBCol>
								<MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
									<MDBModalHeader toggle={this.toggle(14)}>Farmr</MDBModalHeader>
									<MDBModalBody>
										<p>
											Directly connect to your farm fresh supplier. Making “farm to table” more
											achievable and less time-consuming!
										</p>
										<p> MERN Stack — MongoDB, Express, React, Node.</p>
										<p> NPM packages — JWT, bcrypt, cors, sendgrid/mail, mongoose.</p>
									</MDBModalBody>
									<MDBModalFooter>
										<MDBBtn
											href='https://medium.com/@tarynli/farmr-case-study-c359e3fa1701'
											target='_blank'>
											Case study
										</MDBBtn>
										<MDBBtn color='secondary' onClick={this.toggle(14)}>
											Close
										</MDBBtn>
									</MDBModalFooter>
								</MDBModal>
								<MDBCol md='4'>
									<MDBView hover>
										<img src={activityfindr} className='img-fluid' alt='activity findr project' />
										<MDBMask className='flex-center' overlay='black'>
											<p className='white-text'>
												<MDBBtn color='primary' onClick={this.toggle(14)}>
													Learn more
												</MDBBtn>
											</p>
										</MDBMask>
									</MDBView>
								</MDBCol>
								<MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
									<MDBModalHeader toggle={this.toggle(14)}>Activity Findr</MDBModalHeader>
									<MDBModalBody>
										<p>
											Directly connect to your farm fresh supplier. Making “farm to table” more
											achievable and less time-consuming!
										</p>
										<p> MERN Stack — MongoDB, Express, React, Node.</p>
										<p> NPM packages — JWT, bcrypt, cors, sendgrid/mail, mongoose.</p>
									</MDBModalBody>
									<MDBModalFooter>
										<MDBBtn
											href='https://medium.com/@tarynli/farmr-case-study-c359e3fa1701'
											target='_blank'>
											Case study
										</MDBBtn>
										<MDBBtn color='secondary' onClick={this.toggle(14)}>
											Close
										</MDBBtn>
									</MDBModalFooter>
								</MDBModal>
								<MDBCol md='4'>
									<MDBView hover>
										<img src={linqu} className='img-fluid' alt='farmr project' />
										<MDBMask className='flex-center' overlay='black'>
											<p className='white-text'>
												<MDBBtn color='primary' onClick={this.toggle(14)}>
													Learn more
												</MDBBtn>
											</p>
										</MDBMask>
									</MDBView>
								</MDBCol>
								<MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
									<MDBModalHeader toggle={this.toggle(14)}>Farmr</MDBModalHeader>
									<MDBModalBody>
										<p>
											Directly connect to your farm fresh supplier. Making “farm to table” more
											achievable and less time-consuming!
										</p>
										<p> MERN Stack — MongoDB, Express, React, Node.</p>
										<p> NPM packages — JWT, bcrypt, cors, sendgrid/mail, mongoose.</p>
									</MDBModalBody>
									<MDBModalFooter>
										<MDBBtn
											href='https://medium.com/@tarynli/farmr-case-study-c359e3fa1701'
											target='_blank'>
											Case study
										</MDBBtn>
										<MDBBtn color='secondary' onClick={this.toggle(14)}>
											Close
										</MDBBtn>
									</MDBModalFooter>
								</MDBModal>
							</MDBRow>
							<MDBRow>
								<MDBCol md='4'>
									<MDBView hover>
										<img src={rover} className='img-fluid' alt='Rover - UI project' />
										<MDBMask className='flex-center' overlay='black'>
											<p className='white-text'>
												<MDBBtn color='primary' onClick={this.toggle(14)}>
													Learn more
												</MDBBtn>
											</p>
										</MDBMask>
									</MDBView>
								</MDBCol>
								<MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
									<MDBModalHeader toggle={this.toggle(14)}>Rover - Style guide</MDBModalHeader>
									<MDBModalBody>
										<p>
											Directly connect to your farm fresh supplier. Making “farm to table” more
											achievable and less time-consuming!
										</p>
										<p> Sketch App and Flinto.</p>
										<p> Inspo — Carbon Design Systems, Material Design, 1920-1940s Art Deco.</p>
									</MDBModalBody>
									<MDBModalFooter>
										<MDBBtn
											href='https://medium.com/@tarynli/farmr-case-study-c359e3fa1701'
											target='_blank'>
											Dribbble
										</MDBBtn>
										<MDBBtn color='secondary' onClick={this.toggle(14)}>
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
