import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import TopNav from '../Nav/TopNav.js';
import './about.scss';



export default class About extends Component {
    render() {
        return (
            <div className='home'>
                <div className='about' ref={this.aboutRef}>
                    <div className='info'>
                        <img className='portrait' src='./assets/DSC_2366-2.jpg' alt='Taryn Li' />
                        <div className='text'>
                            <h1>About</h1>
                            <p>Hi! I'm a recent graduate of BrainStation's web development program, located in Toronto, ON. I was honored to be Awarded the <span>Women in Development</span> Scholarship.
                            My experience at BrainStation allowed me to grasp new concepts quickly, and effectively adapt to full stack development.
                            Known as a self-starter with a take-charge attitude; highly motivated to work in a fast paced,
                            innovative environment. A creative, resourceful developer with good interpersonal and organizational skills.
                            </p>
                            <span> Women in Development Recipient (2018)</span>
                            <div className='text__focus'>
                                <h3>Current focus:</h3>
                                <a href='https://reactjs.org/'>
                                    <h4>React</h4>
                                    {/* <img src={logo}/> */}
                                </a>
                                <span>//</span>
                                <a href='https://redux.js.org/basics/usage-with-react'>
                                <h4>Redux</h4>
                                </a>
                                <span>//</span>
                                <a href='https://github.com/styled-components/styled-components'>
                                <h4>Styled-components 💅</h4>
                                </a>
                                <span>//</span>
                                <h4>Accessibility</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <TopNav />
            </div>
        )
    }
}
