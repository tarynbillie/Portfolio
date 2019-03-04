import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from "react-scroll"
import upArrow from '../../../assets/round-expand_less.svg'
import Footer from '../../Footer/Footer'
import '../../Nav/sideNav.scss'
import '../projects.scss'





export default class ActivityFindr extends Component {

    constructor() {
        super()
        this.missionRef = React.createRef();
        this.challengeRef = React.createRef();
        this.codeRef = React.createRef();
        this.conclusionRef = React.createRef();
        this.contactRef = React.createRef();

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
                    <Link to={'/projects'} className='link'>
                        <h2>Back</h2>
                    </Link>
                </div>
                <div className='side-nav'>
                    <h3 onClick={() => { this.scroll(this.missionRef) }}>Mission</h3>
                    <h3 onClick={() => { this.scroll(this.challengeRef) }}>Challenges</h3>
                    <h3 onClick={() => { this.scroll(this.codeRef) }}>Code</h3>
                    <h3 onClick={() => { this.scroll(this.conclusionRef) }}>Conclusion</h3>
                    <h3 onClick={() => { this.scroll(this.contactRef) }}>Contact me</h3>
                </div>
                <div className='farmr'>
                    <div className='title'>
                        <h1>Activity Findr</h1>
                        <h2>Paired Programming Project - 2018</h2>
                    </div>
                    <section ref={this.missionRef}>
                        <h1>Mission</h1>
                        <p>
                            Activity Findr helps you find your next activity!
                        </p>
                        <p>
                            It's Friday night and you're bored at home. Go onto Activity Findr, fill in a general idea of what you would like to do, your price range, location/ how far you're willing to go, 
                            and Activity Findr will do the rest for you. Giving you suggestions with ratings, and a convenient map showing you where the establishment is located.
                        </p>
                        <p>
                            Once the user clicks our "Show me some activities" button they are taken to a new page with a list of results.
                            The results show the establishment name, the star ratings, yelp reviews, and a handy Google maps locator. Don't like what you see?
                            Hit the Activity Findr logo and change your inputs to get different results.
                        </p>
                    </section>
                    <section ref={this.challengeRef}>
                        <h1>Challenges</h1>
                        <p>
                            This particular project was to experience paired programming for the first time.
                            Pair programming is an agile software development technique in which two programmers work together at one workstation. 
                            One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently.
                        </p>
                        <p>
                            During this project I was actually in a group of three. This was a unique challenge I faced, not only because I had never done paired programming before, but to throw in an extra
                            person was tricky when crowded around one Macbook Air. I will admit we did break off onto our own laptops to get the project finished in time.
                        </p>
                    </section>
                    <section ref={this.codeRef}>
                        <h1>Code</h1>
                        <p>
                            <b>Stack</b> - React, Express, Node.
                        </p>
                        <p>
                            <b>NPM packages</b> - cors, rapidapi-connect, apollo-boost, graphql, google-maps-react, react-star-rating-component, react-router-dom.
                        </p>
                    </section>
                    <section ref={this.conclusionRef}>
                        <h1>Project Conclusion</h1>
                        <p>
                            In conclusion, I found paird programming to be very helpful. Not only do you catch silly errors, like missing a semicolon, or misspelling a variable, but it was super fun! I love collaborating
                            on ideas and designs. Any app that makes users lives easier, or more fun, is always a great motivation for me to create.
                        </p>
                    </section>
                    <button onClick={this.scrollToTop}>
                        <img src={upArrow} alt='arrow' />
                    </button>
                </div>
                <div ref={this.contactRef}>
                    <Footer />
                </div>
            </div>
        )
    }
}


