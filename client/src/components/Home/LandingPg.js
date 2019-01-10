import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import Header from '../Header/Header.js';
import '../Home/home.scss';
import '../Nav/nav.scss';
import TopNav from '../Nav/TopNav';


export default class LandingPage extends Component {

    render() {
        return (
            <div className='home'>
                <section className='hero'>
                    <TopNav />
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
                <footer>
                    <a href='https://github.com/tarynbillie'>
                        <img src='./assets/GitHub.svg' alt='LinkedIn' />
                    </a>
                    <a href='https://www.linkedin.com/in/taryn-li/'>
                        <img src='./assets/LinkedIn.svg' alt='Github' />
                    </a>
                </footer>
            </div>
        )
    }
}
