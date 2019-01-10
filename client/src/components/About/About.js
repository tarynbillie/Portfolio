import React, { Component } from 'react';
import TopNav from '../Nav/TopNav.js';
import './about.scss';



export default class About extends Component {
    render() {
        return (
            <div className='home'>
                <TopNav />
                <section className='about' ref={this.aboutRef}>
                    <div className='info'>
                        <img className='portrait' src='./assets/DSC_2366-2.jpg' alt='Taryn Li' />
                        <div className='text'>
                            <h1>About</h1>
                            <p>Hi! I'm a recent graduate of BrainStation's web development program, located in Toronto, ON.
                            My experience at BrainStation allowed me to grasp new concepts quickly, and effectively adapt to full stack development.
                            Known as a self-starter with a take-charge attitude; highly motivated to work in a fast paced, 
                            innovative environment. A creative, resourceful developer with good interpersonal and organizational skills.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
