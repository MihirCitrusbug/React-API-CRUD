// * Third party Component
import { createStore } from 'redux'

// * User Reducer
import userReducer from './Reducer'

// * Initiate User Storage for Redux Store 
const store = createStore(
    userReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;