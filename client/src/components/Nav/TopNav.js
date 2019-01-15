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

    componentDidMount() {
        if (window.location.href.includes('about')) {
            this.setState({
                isAbout: true,

            })
        }
    }

    state = {
        isOpen: false,
        isAbout: false,
        isHome: false
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
                    {!this.state.isAbout &&
                        <div>
                            <Link to={'/home'} className='link'>
                                <div className='logo'>
                                    <h1>Taryn Li</h1>
                                </div>
                            </Link>
                            <div className='rectangle' />
                        </div>
                    }
                    <div className={`nav ${this.state.isAbout && 'isAbout'}`}>
                        <Link to={'/home'} className='link'>
                            <h3>Home</h3>
                        </Link>
                        <Link to={'/about'} className='link'>
                            <h3>About</h3>
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
