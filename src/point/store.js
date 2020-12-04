import { createStore } from 'redux'
import reducer from './reducer/reducer'


const configeStore = initialState => (
  createStore(
    reducer,
    initialState
  )
)


const store = configeStore({ })

export default store;
