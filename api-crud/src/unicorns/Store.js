import { createStore } from 'redux'
import unicornReducer from './Reducer'

const store = createStore(unicornReducer);

export default store;