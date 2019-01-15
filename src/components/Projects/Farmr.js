import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import upArrow from '../../assets/round-expand_less.svg';
import farmr from '../../assets/Farmr-macbook.png';
import code from '../../assets/Bitmap.png';
import './farmr.scss';
import Footer from '../Footer/Footer';


export default class Farmr extends Component {

    constructor() {
        super()
        this.missionRef = React.createRef();
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
                    <Link to={'/home'} className='link'>
                        <h3>Home</h3>
                    </Link>
                        <h3 onClick={() => { this.scroll(this.missionRef) }}>Mission</h3>
                        <h3 onClick={() => { this.scroll(this.challengeRef) }}>Challenges</h3>
                        <h3 onClick={() => { this.scroll(this.codeRef) }}>Code</h3>
                        <h3 onClick={() => { this.scroll(this.conclusionRef) }}>Conclusion</h3>
                    </div>
                </div>
                <div className='farmr'>
                    <div className='title'>
                        <h1>Farmr</h1>
                        <h2>BrainStation final project - 2018</h2>
                        <img src={farmr} alt='farmr screenshot'/>
                    </div>
                    <section ref={this.missionRef}>
                        <h1>Mission</h1>
                        <p>
                            Directly connecting you to your farm supplier. Making "farm to table"
                            more achievable and less time consuming!
                        </p>
                        <p>
                            Communication and invoicing takes time out of your day
                            for both the farmer and chef. Farmr makes "farm to table" more achievable. My insportaion for creating Farmr
                            was to make my sister and her husband (who are organic farmers) day-to-day lives easier. My initial idea was to
                            create an application that would shave off some time in their busy schedules. I soon realized that this application
                            would save time for more than just a farmer, but also a chef that's looking to give their guests a more unique experience at their resturant.
                        </p>
                        <p>
                            Upon log-in, the user is able to pick and choose which
                            specific produce they would like to order from the farmer and gets stored in the database. Once the user has
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
                        <p>
                            Keeping on track was quite difficult. I took many different routes than I originally didn't set out to. 
                            Using Firebase Authentication (Googles BaaS) seemed appealing at first, but a stubborn little bird on my shoulder
                            was chirpping at me to do it all myself. So that's what I did..."Register" and "Login" authentication and authorization took
                            at least 3 days to accompish, pushing back some features that I wanted to finish. This just meant I had to kick into high gear
                            and complete everything before the due date - which I did of course.
                        </p>
                        <p>
                            Finally, thinking about all the logistics Farmr's core concept, and if it would even make sense to use!
                            I'm no business woman by all means, so coming up with a great idea was also a challenge in itself. As a developer, trying to develope,
                            design, analyze, 
                        </p>
                    </section>
                    <section ref={this.codeRef}>
                        <h1>Code</h1>
                        <p>
                            MERN Stack - MongoDb, Express, React, Node.
                        </p>
                        <p>
                            NPM packages used - JWT, bcrypt, cors, sendgrid/mail, mongoose
                        </p>
                    </section>
                    <img src={code} alt='code screenshot' />
                    <section ref={this.conclusionRef}>
                        <h1>Project Conclusion</h1>
                        <p>
                            In conclusion, creating Farmr was very fun and rewarding. I will be continuously updating this project as there
                            are a lot of features that still need to be implemented - as well as some bug fixes.
                            The live version is still to be determind.
                        </p>
                    </section>
                    <button onClick={this.scrollToTop}>
                        <img src={upArrow} alt='arrow'/>
                    </button>
                </div>
                <Footer />
            </div>
        )
    }
}
