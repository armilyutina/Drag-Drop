import React, { useState } from 'react';
import ReactDOM from 'react-dom'


import './styles.scss'

const Trello = () => {

  const initialState = [
    {id: 0, title: 'Do it', items: [{id:0, task: 'Take up'}, {id: 1, task: 'Clean wash'}, {id: 2, task: 'Cookies'}, {id: 3, task: 'Tag your head'}]},
    {id: 1, title: 'In progress', items: [{id:4, task: 'Wake up'}]},
    {id: 2, title: 'Done', items: [{id:5, task: 'Make up'}, {id: 6, task: 'Pick up'}, {id: 7, task: 'Walk in the street'},
                   {id: 8, task: 'See through window'}, {id: 9, task: 'Walk of shame'}]}
  ]


  const [boards, setBoards] = useState(initialState)
  const [currentBoard, setCurrentBoard] =  useState(null)
  const [currentItem, setCurrentItem] =  useState(null)


  function dropHandler(e, board, item){
      e.preventDefault();   // отменили действие по умолчанию
      console.log(currentBoard)
      const currentIndex = currentBoard.items.indexOf(currentItem) //нашли индекс текущей таски в массиве Боард
      currentBoard.items.splice(currentIndex, 1) // почистили таски из текущего Боард
      const dropIndex = board.items.indexOf(item) // нашли индекс элемента над которым держим карточку
      board.items.splice(dropIndex+1, 0, currentItem) // добавили таску после таски в доске, ад которой курсор

      setBoards(boards.map(b => {
        if(b.id === board.id){
          return  board // если текущий элемент итерации равен какой-то измененной доске, то возвращаем измененную доску
        }
        if(b.id === currentBoard.id){
          return currentBoard  // если текущий элемент итерации равен какой-то измененной доске, то возвращаем измененную доску
        }
        return b // иначе просто элемент итерации
      }))
  }

  function dragStartHandler(e, board, item){
    setCurrentBoard(board)  //взяли таску из текущей доски => установили текущую доску
    setCurrentItem(item)   // текущая таска => установили текущую таску
  }

  function dragEndHandler(e){
  }

  function dragOverHandler(e){
    e.preventDefault();
    
  }

  function dragLeaveHandler(e){
  }

  function dropCardHandler(e, board){
    board.items.push(currentItem)
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)

    setBoards(boards.map(b => {
      if(b.id === board.id){
        return board
      }
      if(b.id === currentBoard.id){
        return currentBoard
      }
      return b
    }))
  }


  return(
    <div className = 'app'>
      {
        boards.map(board =>
          <div className = 'board'
               onDragOver = {(e) => dragOverHandler(e)}
               onDrop = {(e) => dropCardHandler(e, board)}>
               <div className = 'board__title'>{board.title}</div>
               {
                  board.items.map(item =>
                    <div className = 'item'
                         draggable = {true}
                         onDrop = {(e) => dropHandler(e, board, item)}
                         onDragEnd = {(e) => dragEndHandler(e)}
                         onDragOver = {(e) => dragOverHandler(e)}
                         onDragLeave = {(e) => dragLeaveHandler(e)}
                         onDragStart = {(e) => dragStartHandler(e, board, item)}
                         >{item.task}</div>
                  )
               }
          </div>
        )
      }
    </div>
  );
}

ReactDOM.render(<Trello />, document.getElementById('trello'))
