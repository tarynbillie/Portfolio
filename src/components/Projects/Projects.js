import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './projects.scss'
import TopNav from '../Nav/TopNav';


export default class Projects extends Component {
  render() {
    return (
      <section>
          <TopNav />
        <div className='projects'>
        <h1>Below are some projects I've worked on</h1>
        </div>
      </section>
    )
  }
}

