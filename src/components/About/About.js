import React, { Component } from 'react';
import portrait from '../../assets/portrait.jpg';
import react from '../../assets/react.svg';
import html5 from '../../assets/html5-badge.svg';
import css3 from '../../assets/css3.svg';
import sass from '../../assets/sass-badge.png';
import javascript from '../../assets/javascript-1.svg';
import node from '../../assets/nodejs-1.svg';
import npm from '../../assets/npm.svg';
import webpack from '../../assets/webpack-icon.svg';
import mongo from '../../assets/mongodb.svg';
import mysql from '../../assets/mysql.svg';
import vscode from '../../assets/visual-studio-code.svg';
import github from '../../assets/github-icon.svg';
import heroku from '../../assets/heroku.svg';
import git from '../../assets/git.svg';
import postman from '../../assets/postman.svg';
import TopNav from '../Nav/TopNav.js';
import './about.scss';



export default class About extends Component {


    render() {

        // const spinner = document.querySelector('.js-loading-spinner');
        // const copy = spinner.querySelector('.js-loading-spinner-copy');
        // if(el.spinner.classList.contains("-loaded")) {
        //     copy.innerHTML = "Content has loaded.";
        // }

        return (
            <div className='home'>
                <div className='about' ref={this.aboutRef}>
                    <div className='info'>
                        <div class="loading-spinner js-loading-spinner" role="alert" aria-live="assertive">
                            <p class="vh js-loading-spinner-copy">Content is loading...</p>
                        </div>
                        <img className='portrait' src={portrait} alt='Taryn Li' />
                        <div className='text'>
                            <h1>About me</h1>
                            <p>Hi! I'm a recent graduate of BrainStation's web development program, located in Toronto, ON.
                            My experience at BrainStation allowed me to grasp new concepts quickly, and effectively adapt to full stack development.
                            Graduating with a 90% average I’m well positioned to contribute robust, clean, maintainable code and become an asset to any team.
                            Known as a self-starter with a take-charge attitude; highly motivated to work in a fast-paced,
                            innovative environment. A creative, resourceful developer with good interpersonal and organizational skills.
                            </p>
                            <span> Women in Development Scholarship Recipient (2018)</span>
                            <div className='text__header'>
                                <h3>Languages and frameworks</h3>
                                <h4>HTML</h4>
                            </div>
                            <div className='text__skill'>
                                <div className='column'>
                                    <img src={html5} alt='html5 logo' className='html'/>
                                    <h5>HTML5</h5>
                                </div>
                                <div className='column'>
                                    <img src={react} alt='react logo'/>
                                    <h5>JSX</h5>
                                </div>
                            </div>
                            <div className='text__header'>
                                <h4>CSS</h4>
                            </div>
                            <div className='text__skill'>
                                <div className='column'>
                                    <img src={css3} alt='css3 logo'/>
                                    <h5>CSS3</h5>
                                </div>
                                <div className='column'>
                                    <img src={sass} alt='sass logo' className='badge--large'/>
                                    <h5>SASS</h5>
                                </div>
                            </div>
                            <div className='text__header'>
                                <h4>JavaScript</h4>
                            </div>
                            <div className='text__skill'>
                                <div className='column'>
                                    <img src={react} alt='react lgoo'/>
                                    <h5>React</h5>
                                </div>
                                <div className='column'>
                                    <img src={javascript} alt='javascript logo' className='badge--large'/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='column'>
                                    <img src={node} alt='node logo'/>
                                    <h5>Node</h5>
                                </div>
                                <div className='column'>
                                    <img src={webpack} alt='webpack logo' className='badge--xlarge'/>
                                    <h5>Webpack</h5>
                                </div>
                                <div className='column'>
                                    <img src={npm} alt='npm logo' className='badge--large'/>
                                    <h5>NPM</h5>
                                </div>
                            </div>
                            <div className='text__header'>
                                <h4>Back-End</h4>
                            </div>
                            <div className='text__skill'>
                                <div className='column'>
                                    <img src={mongo} alt='mongodb logo' className='badge--xlarge'/>
                                    <h5>MongoDB</h5>
                                </div>
                                <div className='column'>
                                    <img src={mysql} alt='mysql logo' className='badge--xlarge'/>
                                    <h5>MySql</h5>
                                </div>
                            </div>
                            <div className='text__header'>
                                <h4>Other</h4>
                            </div>
                            <div className='text__skill'>
                                <div className='column'>
                                    <img src={github} alt='github logo' className='badge--large'/>
                                    <h5>Github</h5>
                                </div>
                                <div className='column'>
                                    <img src={vscode} alt='vscode logo' className='badge--medium'/>
                                    <h5>Visual Studio Code</h5>
                                </div>
                                <div className='column'>
                                    <img src={heroku} alt='heroku logo' className='badge--large'/>
                                    <h5>Heroku</h5>
                                </div>
                                <div className='column'>
                                    <img src={git} alt='git logo'/>
                                    <h5>Git</h5>
                                </div>
                                <div className='column'>
                                    <img src={postman} alt='postman logo' className='badge--medium'/>
                                    <h5>Postman</h5>
                                </div>
                            </div>
                            <div className='text__focus'>
                                <h3>Current focus:</h3>
                                <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">
                                    <h4>React</h4>
                                </a>
                                <span>//</span>
                                <a href='https://redux.js.org/basics/usage-with-react' target="_blank" rel="noopener noreferrer">
                                    <h4>Redux</h4>
                                </a>
                                <span>//</span>
                                <a href='https://github.com/styled-components/styled-components' target="_blank" rel="noopener noreferrer">
                                    <h4>Styled-components <span role="img" aria-label="nail polish">💅</span></h4>
                                </a>
                                <span>//</span>
                                <a href='https://www.w3.org/WAI/fundamentals/accessibility-intro/' target="_blank" rel="noopener noreferrer">
                                    <h4>Accessibility</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <TopNav />
            </div>
        )
    }
}
