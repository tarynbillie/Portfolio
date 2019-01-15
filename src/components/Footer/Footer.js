import React, { Component } from 'react';
import github from '../../assets/github-home.svg';
import linkedin from '../../assets/LinkedIn.svg';
import './footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer__left'>
                    <h1>Get in touch</h1>
                    <h2>tarynbillie@gmail.com</h2>
                    <h2>519 212 2052</h2>
                    <div className='icons'>
                        <a href='https://github.com/tarynbillie'>
                            <img src={linkedin} alt='LinkedIn' />
                        </a>
                        <a href='https://www.linkedin.com/in/taryn-li/'>
                            <img src={github} alt='Github' />
                        </a>
                    </div>
                </div>
                <div className='footer__right'>
                    <h1>Leave a message</h1>
                    <form method="POST" action="https://formspree.io/tarynbillie@gmail.com" >
                        <label>
                            Name
                        <input type='text' name='name' />
                        </label>
                        <label>
                            Email
                        <input type='email' name='email' />
                        </label>
                        <label>
                            Message
                        <textarea type='message' name='message' />
                        </label>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        )
    }
}
