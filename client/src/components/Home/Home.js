import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import '../Home/home.scss';
import'../Header/header.scss';


export default class Home extends Component {

    constructor() {
        super()
        this.aboutRef = React.createRef();
        this.contactRef = React.createRef();
    }
    scroll(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }


    render() {
        return (
            <div className='home'>
                <section className='hero'>
                    <div className='header'>
                        <Link to={'/home'} className='link'>
                            <div className='logo'>
                                <h1>Taryn Li</h1>
                            </div>
                        </Link>
                        <div className='rectangle' />
                        <div className='nav'>
                            <h3 onClick={() => { this.scroll(this.aboutRef) }}>About</h3>
                            <Link to={'/projects'} className='link'>
                                <h3>Projects</h3>
                            </Link>
                            <h3 className='contact' onClick={() => { this.scroll(this.contactRef) }}>Get in touch</h3>
                        </div>
                    </div>
                    <div className='blurb'>
                        <h2>Hello, my name is Taryn Li</h2>
                        <h3>I am a Jr. Full Stack Developer from Toronto, Ontario.</h3>
                        <Link to={'/projects'}>
                            <button className='project'>
                                <span>Checkout my recent work</span>
                            </button>
                        </Link>
                    </div>
                </section>
                <section className='about' ref={this.aboutRef}>
                    <div className='info'>
                        <img className='portrait' src='./assets/DSC_2366-2.jpg' alt='Taryn Li' />
                        <div className='text'>
                            <h1>About</h1>
                            <p>Hi! I'm a recent graduate of BrainStation, located in Toronto, On.
                                My journey as a web developer started after graduating highschool, not quite knowing
                                what I secondary school program I wanted to enroll in, I chose the more general path of Technology Engineering Foundations.
                                After learning the foundations of Civil, Mechanical, Architecture, and Computer Engineering. I decided to pursue Mechanical - Robotics and Automation.
                                Still not having a strong grasp on how I wanted to paint my future I reluctantly did not finish the program.
                            </p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
