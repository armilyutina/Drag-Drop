import { ADD } from '../constants'
import tasks from '../tasks'

const task = (state = tasks, { type, id, task, isComplited }) => {
  switch(type) {
    case ADD:
      return [
        ...state,
        {
          id,
          tasks,
          isComplited
        }
      ]
    default:
      return [...state]
  }
}


export default task;
