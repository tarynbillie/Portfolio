import React, { Component } from 'react';
import './scroll.scss';
/** A React component for scrolling back to the top of the page **/

class ScrollButton extends Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.scrollY === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.scrollY - this.props.scrollStepInPx);
    }
    
    scroll() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      //store the intervalId inside the state, 
      //so we can use it later to cancel the scrolling
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return <button href='#' title='Back to top' 
                 id='scroll' className='scroll' 
                 onClick={ (event) => { 
                                event.preventDefault();
                                this.scroll(); 
                          }}>
                  <span className='glyphicon glyphicon-chevron-up'></span>
                </button>;
     }
  }
  /*
   * Render the above component into the div with the id 'app'
   */
  React.render(<ScrollButton scrollStepInPx='50' delayInMs='16.66'/>, 
               document.getElementById('app'));