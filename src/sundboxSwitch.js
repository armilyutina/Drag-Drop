import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import './stylesSwitch.scss'

const Switch = () => {
  const [mode, setMode] = useState('out-in')
  const [toggle, setToggle] = useState(false)


  const changeHandler = e => {
    setMode(e.target.value)
  }

  return(
        <div className = 'app'>
            <label htmlFor = 'out-in'>out-in</label>
            <input onChange = {(e) => changeHandler(e)} id = 'out-in'  value = 'out-in' type = 'radio'></input>

            <label htmlFor = 'in-out'>in-out</label>
            <input onChange = {(e) => changeHandler(e)} id = 'in-out' value = 'in-out'  type = 'radio'></input>


            <SwitchTransition mode = {mode}>
              <CSSTransition  key = {toggle}
                              in = {toggle}
                              timeout = {500}
                              className = 'fade' >
                <button onClick = {() => setToggle(!toggle)}>{toggle ? 'Hello word!' : "Goodbye word!"}</button>
              </CSSTransition>
            </SwitchTransition>
        </div>
  );
}


ReactDOM.render(<Switch />, document.getElementById('switch'))
