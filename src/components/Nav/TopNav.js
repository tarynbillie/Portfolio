import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import ContactModal from '../Modal/ContactModal.js'
import './topNav.scss';


export default class TopNav extends Component {

    constructor(props) {
        super(props)
        this.contactRef = React.createRef();
        // this.handleClick = this.handleClick.bind(this);

        this.state = {
            isOpen: false,
            isAbout: false,
            isHome: false,
            animate: false,
        }

    }

    // handleClick(e) {
    //     // modify the state, this will automatically recall render() below.
    //     this.setState((prevState) => {
    //       return { animate: !prevState.animate }
    //     });
    // }


    componentDidMount() {
        if (window.location.href.includes('about')) {
            this.setState({
                isAbout: true,

            })
        }
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
            <div className='header'>
                {!this.state.isAbout &&
                    <div>
                        <NavLink to={'/home'} className='link'>
                            <div className='logo'>
                                <h1>Taryn Li</h1>
                            </div>
                        </NavLink>
                        <div className='rectangle' />
                    </div>
                }
                <div className={`nav ${this.state.isAbout && 'isAbout'}`}>
                    <NavLink to={'/home'} className='link' activeClassName='selected'>
                        <h3>Home</h3>
                    </NavLink>
                    <NavLink to={'/about'} className='link' activeClassName='selected'>
                        <h3>About me</h3>
                    </NavLink>
                    <NavLink to={'/projects'} className='link' activeClassName='selected'>
                        <h3>Projects</h3>
                    </NavLink>
                    <button className='contact' onClick={this.showModal}>Get in touch</button>
                    <ContactModal handleClose={this.closeModal} Open={this.state.isOpen} />
                </div>
            </div>
        )
    }
}
