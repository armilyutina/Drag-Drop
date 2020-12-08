import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './stylesRGT.scss';

const SundboxRTG = () => {
  const [value, setValue] = useState('')
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: 'wish wash dish'
    },
    {
      id: 2,
      task: 'shop is dish'
    },
    {
      id: 3,
      task: 'buzzzy'
    }
  ])

  const add = () => {
    setTodoList([...todoList, {
      id: new Date().toString(),
      task: value
    }])
  }

  return(
    <div className = 'app'>

      <input value = {value} onChange = {(e) => setValue(e.target.value)}></input>
      <button onClick = {() => add()}>ADD</button>
      <TransitionGroup  component = 'ul'>
            {
              todoList.map(({id, task}, i) =>
                  <CSSTransition key = {id} timeout = {500} classNames = 'todo'>
                      <li
                            onClick = {() => setTodoList([...todoList].filter(item => item.id !== id)) }
                            key = {id}> {id}  {task}
                      </li>
                  </CSSTransition>
                )
            }
      </TransitionGroup>
    </div>
  );
}



ReactDOM.render(<SundboxRTG />, document.getElementById('rtg'))
