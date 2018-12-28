import React, { Component } from 'react'
import '../Home/home.scss';
import Header from '../Header/Header.js';


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
                    <Header/>
                    <div className='blurb'>
                        <h2>Hello, my name is Taryn Li</h2>
                        <h3>I am a Jr. Full Stack Developer from Toronto, Ontario.</h3>
                        <button className='project'>Checkout my recent work</button>
                    </div>
                </section>
                <section className='about' ref={this.aboutRef}>
                    <div className='info'>
                        <img src='./assets/DSC_2366-2.jpg' alt='Taryn Li' />
                        <div className='text'>
                            <h1>About</h1>
                            <p>Hi! I'm a recent graduate of BrainStation, located in Toronto, On.
                                Ready to contribute to this hell hole we call society.
                        </p>
                        </div>
                    </div>
                </section>
                <section className='footer'>
                    <div className='footer__left'>
                        <h1>Get in touch</h1>
                        <h2>tarynli@hotmail.com</h2>
                        <h2>519 212 2052</h2>
                    </div>
                    <div className='footer__right'>
                        <h1>Leave a message</h1>
                        <form>
                            <label>
                                Name
                            <input type='text' />
                            </label>
                            <label>
                                Email
                            <input type='email' />
                            </label>
                            <label>
                                Message
                            <textarea type='text' />
                            </label>
                            <button>Send</button>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}
