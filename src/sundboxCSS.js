import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom'

import { CSSTransition, Transition } from 'react-transition-group';
import './CSSstyles.scss'


const SundboxCSS = () => {
  const [loaderActive, setActive] = useState(false)



  return(
    <>
      <div className = 'app'>
        <h1>CSSTransition</h1>
        <button onClick = {() => setActive(!loaderActive)}>{ loaderActive ? 'Hide' : 'Show'}</button>
        <div className = 'wrapper'>
            <CSSTransition in={loaderActive}
                           timeout = {600}
                           classNames = {{
                             enterActive: 'circle-show',
                             exitActive: 'circle-rotate',
                             enterDone: 'circle-hide',
                           }}
                           mountOnEnter
                           unmountOnExit
            >
                           <div className = 'circle' />
            </CSSTransition>

        </div>
      </div>
    </>
  );
}



ReactDOM.render(<SundboxCSS />, document.getElementById('loader-1'))
