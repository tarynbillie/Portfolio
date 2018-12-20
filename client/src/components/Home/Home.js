import React, { Component } from 'react'
import './Header/header.scss';

export default class Header extends Component {

    constructor() {
        super()
        this.aboutRef = React.createRef();
        this.contactRef = React.createRef();
    }
    scroll(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }


    render() {
        return (
            <div>
                <section className='header'>
                    <div className='header__me'>
                        <h1>Taryn Li</h1>
                        <h2>Junior Web Developer</h2>
                    </div>
                    <div className='header__nav'>
                        <h3 onClick={() => { this.scroll(this.aboutRef) }}>About</h3>
                        <h3>Projects</h3>
                        <h3>Resume</h3>
                        <h3>Contact</h3>
                    </div>
                </section>
                <section className='about' ref={this.aboutRef}>
                </section>
            </div>
        )
    }
}
