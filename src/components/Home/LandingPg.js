import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import github from '../../assets/github-home.svg';
import linkedin from '../../assets/LinkedIn.svg';
import TopNav from '../Nav/TopNav';
import '../Home/home.scss';
import '../Nav/nav.scss';


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
                        <div className='social-media'>
                            <a href='https://github.com/tarynbillie'>
                                <img src={linkedin} alt='LinkedIn' />
                            </a>
                            <a href='https://www.linkedin.com/in/taryn-li/'>
                                <img src={github} alt='Github' />
                            </a>
                        </div>
                    </div>
                
            
                </section>
            </div>
        )
    }
}