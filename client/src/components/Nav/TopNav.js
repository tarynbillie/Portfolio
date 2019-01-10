import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ContactModal from '../Modal/ContactModal.js'
import './nav.scss';


export default class TopNav extends Component {

    constructor() {
        super()
        this.contactRef = React.createRef();
    }
    scroll(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    state = {
        isOpen: false,
    }

    showModal = () => {
        this.setState({
            isOpen: true
        });
    };

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <Link to={'/home'} className='link'>
                        <div className='logo'>
                            <h1>Taryn Li</h1>
                        </div>
                    </Link>
                    <div className='rectangle' />
                    <div className='nav'>
                    <Link to={'/home'} className='link'>
                        <h3>Home</h3>
                    </Link>
                        <Link to={'/about'} className='link'>
                            <h3>About Me</h3>
                        </Link>
                        <Link to={'/projects'} className='link'>
                            <h3>Projects</h3>
                        </Link>
                        <button className='contact' onClick={this.showModal}>Get in touch</button>
                        <ContactModal handleClose={this.closeModal} Open={this.state.isOpen} />

                    </div>
                </div>
            </div>
        )
    }
}
