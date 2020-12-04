import { FILTER, ADD } from '../constants'

export const add = (state, {task, id, isComplited}) => {
  return [
    ...state,
    {
      type: ADD,
      id,
      task,
      isComplited
    }
  ]
}

export const filters = (state, {id}) => {
  return [
    ...state,
    {
      type: FILTER,
      id
    }
  ]
}
