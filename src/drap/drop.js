import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.css'


const Drop = () => {

  const [cardList, setList] = useState([
    {id:1, order:4, text:"Карточка 4"},
    {id:2, order:2, text:"Карточка 2"},
    {id:3, order:3, text:"Карточка 3"},
    {id:4, order:1, text:"Карточка 1"}
  ])

  const [currentCard, setCurrentCard] = useState(null)

  function dragStartHandler(e, card) {
      console.log('drag', card)
      setCurrentCard(card)
      e.target.style.background = 'red'
  }

  function dragEndHandler(e) {
    e.target.style.background = 'pink'
  }

  function dropHandler(e, card) {
      e.preventDefault()
      console.log('drop', card)
      setList(cardList.map(c => {
        if(card.id === c.id){
          return {
            ...c,
            order: currentCard.order
          }
        }
        if(c.id === currentCard.id){
          return {
            ...c, order: card.order
          }
        }
        return c
      }))
  }

  function dragLeaveHandler(e) {
    e.target.style.background = 'lightgrey'
  }

  function dragOverHandler(e) {
      e.preventDefault()
      e.target.style.background = 'yellow'
  }

  return(

    <div  className = 'drap__and__drop'>

      {
        cardList.sort((a,b) => a.order > b.order ? 1 : -1).map((card, index) =>
          <div draggable = {true}
               onDragStart = {(e)=> dragStartHandler(e, card)}
               onDragEnd = {(e)=> dragEndHandler(e)}
               onDragLeave = {(e)=> dragLeaveHandler(e)}
               onDragOver = {(e)=>  dragOverHandler(e)}
               onDrop = {(e)=> dropHandler(e, card)}
               className = 'card'
               key = {index}>
                      {card.text}
          </div>
        )
      }
    </div>


  );

}

ReactDOM.render(<Drop />, document.getElementById('sqrt'))
