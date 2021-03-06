import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closebtn from '../../assets/close.svg';
import './modal.scss';


export default class ContactModal extends Component {


    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        if (this.state.email.trim() === '' || this.state.password === '') {
            this.setState({
                errorMsg1: '*field is required',
                errorMsg2: '*field is required'
            })
        } else {
            this.contact();
        }

    }

    formReset() {
        this.setState({
            email: '',
            password: '',
            errorMsg: '',
        })
    }


    render() {


        return (
            <div style={{ ...flex, display: this.props.Open ? 'flex' : 'none' }}>
                <div className='modal-layer' onClick={this.props.handleClose} style={modalLayer}></div>
                <div className="form-container" style={formModal}>
                <div className='form-container__close'>
                    <img src={closebtn} alt='close' onClick={this.props.handleClose} />
                </div>
                    <h1>Leave a message</h1>
                    <form method="POST" action="https://formspree.io/tarynbillie@gmail.com" >
                        <label>
                            Name
                            <input type='text' name='name'/>
                        </label>
                        <label>
                            Email address
                            <input type='email' name='email'/>
                        </label>
                        <label>
                            Message
                            <textarea type='message' name='message' />
                        </label>
                        <div className='btn'>
                            <button type='submit' onClick={this.props.handleClose}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

ContactModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    Open: PropTypes.bool.isRequired,
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
    backgroundColor: 'rgba(57,57,57,0.6)',
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