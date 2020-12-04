import { FILTER } from '../constants'
import tasks from '../tasks'

const filter = (state = tasks, { type, id}) => {
  switch (type) {
    case FILTER:
      return [...state].filter(item => item.id !== id)
    default:
      return state
  }
}


export default filter;
