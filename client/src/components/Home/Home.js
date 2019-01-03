import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import '../Home/home.scss';


export default class Home extends Component {

    constructor() {
        super()
        this.aboutRef = React.createRef();
    }
    scroll(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }


    render() {
        return (
            <div className='home'>
                <section className='hero'>
                    <Header />
                    <div className='blurb'>
                        <h2>Hello, my name is Taryn Li</h2>
                        <h3>I am a Jr. Full Stack Developer from Toronto, Ontario.</h3>
                        <Link to={'/projects'}>
                            <button className='project'>
                                Checkout my recent work
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
                                Ready to contribute to this hell hole we call society.
                            </p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
