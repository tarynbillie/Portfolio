import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import farmr from '../../assets/Farmr-macbook.png';
import TopNav from '../Nav/TopNav';
import './projectsLanding.scss'


export default class Projects extends Component {
    render() {
        return (
            <section>
                <TopNav />
                <div className='projects'>
                    <h1>Below are some projects I've worked on</h1>
                    <div className='table'>
                    <ul>
                        <li>
                            <Link to={'/farmr'}>
                                <img src={farmr} alt='farmr screenshot' />
                            </Link>
                        </li>
                        <li>
                            <Link to={'/activityfindr'}>
                                <p>Activity Findr</p>
                            </Link>
                        </li>
                        <li>
                            <p>Coming soon</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </section>
        )
    }
}
