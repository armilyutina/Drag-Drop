import React, { useState, useEffect, Fragment } from 'react'
import ReactDOM from 'react-dom'

import { Transition } from 'react-transition-group';
import './styles.scss'


const Sundbox = () => {
  const [loaderActive, setActive] = useState(false)

  /*useEffect(() => {
    setTimeout(()=>setActive(true), 1000)
    setTimeout(()=>setActive(false), 5000)
  })*/

  return(
    <>
      <div className = 'app'>
        <h1>Transition</h1>
        <button onClick = {() => setActive(!loaderActive) }>{ loaderActive ? 'Hide' : 'Show'}</button>
        <div className = 'wrapper'>
          <Transition  in = {loaderActive}
                       timeout ={500}
                       mountOnEnter
                       unmountOnExit
                       onEnter = {()=>console.log('enter')}
                       onEntering = {()=>console.log('entering')}
                       onEntered = {()=>console.log('entered')}
                       onExite = {()=>console.log('exite')}
                       onExiting = {()=>console.log('exiting')}
                       onExited = {()=>console.log('exited')}
          >{
            state => <div className = {`circle ${state}`} />
          }
          </Transition>

        </div>

      </div>
    </>
  );
}



ReactDOM.render(<Sundbox />, document.getElementById('loader'))
