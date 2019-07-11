import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
import './contact.scss';

export default class Contact extends Component {
	constructor () {
		super();

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleKeyPress (e) {
		if (e.which === 13) {
			this.setState({ value: this.props.predicted });
		}
	}

	formSubmit = (e) => {
		e.preventDefault();
		if (this.state.email.trim() === '' || this.state.password === '') {
			this.setState({
				errorMsg1: '*field is required',
				errorMsg2: '*field is required'
			});
		}
		else {
			this.contact();
		}
	};

	formReset () {
		this.setState({
			email: '',
			password: '',
			errorMsg: ''
		});
	}

	render () {
		// Form Validation
		function validateForm () {
			var name = document.getElementById('name').value;
			if (name === '') {
				document.getElementById('status').innerHTML = 'Name cannot be empty';
				return false;
			}
			var email = document.getElementById('email').value;
			if (email === '') {
				document.getElementById('status').innerHTML = 'Email cannot be empty';
				return false;
			}
			else {
				var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if (!re.test(email)) {
					document.getElementById('status').innerHTML = 'Email format invalid';
					return false;
				}
			}
			var subject = document.getElementById('subject').value;
			if (subject === '') {
				document.getElementById('status').innerHTML = 'Subject cannot be empty';
				return false;
			}
			var message = document.getElementById('message').value;
			if (message === '') {
				document.getElementById('status').innerHTML = 'Message cannot be empty';
				return false;
			}
			document.getElementById('status').innerHTML = 'Sending...';
			document.getElementById('contact-form').submit();
		}
		return (
			<div>
				<section id='contact'>
					<h1>Get in touch</h1>
					<div className='row'>
						<div className='col-md-9 mb-md-0 mb-5'>
							<form
								id='contact-form'
								name='contact-form'
								method='POST'
								action='https://formspree.io/tarynbillie@gmail.com'>
								<div className='row'>
									<div className='col-md-6'>
										<MDBInput id='name' label='Name' type='text' />
									</div>

									<div className='col-md-6'>
										<MDBInput id='email' label='Email' type='email' />
									</div>
								</div>

								<div className='row'>
									<div className='col-md-12'>
										<MDBInput
											for='subject'
											id='subject'
											name='subject'
											label='Subject'
											type='text'
										/>
									</div>
								</div>

								<div classNameName='row'>
									<div classNameName='col-md-12'>
										<div className='md-form'>
											<textarea
												type='text'
												id='message'
												name='message'
												rows='2'
												className='form-control md-textarea'
											/>
											<label for='message'>Message</label>
										</div>
									</div>
								</div>
							</form>

							<div className='text-center text-md-left'>
								<button className='btn btn-primary' onclick={validateForm}>
									Send
								</button>
							</div>
							<div className='status' />
						</div>
					</div>
				</section>
			</div>
		);
	}
}
