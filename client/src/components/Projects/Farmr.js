import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import upArrow from '../../assets/round-expand_less.svg';
import './farmr.scss';
import Footer from '../Footer/Footer';


export default class Farmr extends Component {

    constructor() {
        super()
        this.aboutRef = React.createRef();
        this.challengeRef = React.createRef();
        this.codeRef = React.createRef();
        this.conclusionRef = React.createRef();
    }
    scroll(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div className='project'>
                <div className='header'>
                    <Link to={'/home'} className='link'>
                        <div className='logo'>
                            <h1>Taryn Li</h1>
                        </div>
                    </Link>
                    <div className='rectangle' />
                    <div className='nav'>
                        <h3 onClick={() => { this.scroll(this.aboutRef) }}>About</h3>
                        <h3 onClick={() => { this.scroll(this.challengeRef) }}>Challenges</h3>
                        <h3 onClick={() => { this.scroll(this.codeRef) }}>Code</h3>
                        <h3 onClick={() => { this.scroll(this.conclusionRef) }}>Conclusion</h3>
                    </div>
                </div>
                <div className='farmr'>
                    <div className='title'>
                        <h1>Farmr</h1>
                        <h2>BrainStation final project - 2018</h2>
                        <img src='./assets/Farmr-macbook.png' />
                    </div>
                    <section ref={this.aboutRef}>
                        <h1>About the project</h1>
                        <p>
                            Directly connecting you to your farm supplier. Making "farm to table"
                            more achievable and less time consuming!
                        </p>
                        <p>
                            Communication and invoicing takes time out of your day
                            for both the farmer and chef. Farmr makes "farm to table" more achievable.
                            Upon log-in, the user will be able to see what produce the farmer is going
                            to harvest for the upcoming week. The user is able to pick and choose which
                            specific produce they would like to order from the farmer. Once the user has
                            chosen their final pickings for the upcoming week, a notification email asking
                            ther user to log in.
                        </p>
                    </section>
                    <section ref={this.challengeRef}>
                        <h1>Challenges</h1>
                        <p>
                            While attending school I was given 1 1/2 weeks to work on this final project.
                            That was my first challenge. As stated in my project proposal, I set off to make a list
                            of "core features". Features that I though I would be able to create within the given timeframe.
                            I had also created "stretch features" that I would implement <i>only</i> after completing the core ones.
                            By doing this I was able to time managment more effectivly.
                        </p>
                    </section>
                    <section ref={this.codeRef}>
                        <h1>Code</h1>
                        <p>
                            MERN Stack - MongoDb, Express, React, Node.
                        </p>
                        <p>
                            NPM install
                        </p>
                    </section>
                    <img src='./assets/Bitmap.png' alt='code' />
                    <section ref={this.conclusionRef}>
                        <h1>Project Conclusion</h1>
                        <p>
                            In conclusion, this project was very fun and rewarding.
                        </p>
                    </section>
                    <button onClick={this.scrollToTop}>
                        <img className='' src={upArrow} />
                    </button>
                </div>
                <Footer />
            </div>
        )
    }
}
