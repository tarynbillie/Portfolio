import React, { Component } from 'react'
import './footer.scss';

export default class Footer extends Component {
  render() {
    return (
            <section className='footer'>
        <div className='footer__left'>
            <h1>Get in touch</h1>
            <h2>tarynli@hotmail.com</h2>
            <h2>519 212 2052</h2>
        </div>
        <div className='footer__right'>
            <h1>Leave a message</h1>
            <form>
                <label>
                    Name
                <input type='text' />
                </label>
                <label>
                    Email
                <input type='email' />
                </label>
                <label>
                    Message
                <textarea type='text' />
                </label>
                <button>Send</button>
            </form>
        </div>
    </section>
    )
  }
}
