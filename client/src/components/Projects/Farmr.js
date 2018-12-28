import React, { Component } from 'react'
import './farmr.scss';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';


export default class Farmr extends Component {
    render() {
        return (
            <div className='project'>
                <Header />
                <div className='title'>
                    <h1>Farmr</h1>
                    <h2>BrainStation final project - 2018</h2>
                </div>
                <section>
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
                <section>
                    <h1>Challenges</h1>
                    <p>
                        While attending school I was given 1 1/2 weeks to work on this final project.
                        That was my first challenge. As stated in my project proposal, I set off to make a list
                        of "core features". Features that I though I would be able to create within the given timeframe.
                        I had also created "stretch features" that I would implement <i>only</i> after completing the core ones.
                        By doing this I was able to time managment more effectivly.
                    </p>
                </section>
                <section>
                    <h1>Code</h1>
                    <p>
                        MERN Stack - MongoDb, Express, React, Node.
                    </p>
                    <p>

                    </p>
                </section>
                <section>
                    <h1>Project Conclusion</h1>
                </section>
                <button>Back to top</button>
                <div>

                <Footer />
                </div>
            </div>
        )
    }
}
