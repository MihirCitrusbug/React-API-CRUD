import { useEffect } from 'react';
import { Provider } from 'react-redux'
import unicornStore from "./unicorns/Store";
import axios from 'axios'
import Home from './components/Home';
// * Third party Components
import { Routes, Route } from 'react-router-dom'
import Entity from './components/Entity';
export const CRUD_API_URL = 'https://crudcrud.com/api/0ee1f72d70534fb1b05e32ffb51bfe39'


// import CRUD_API_URL from '../src/env'


function App() {

  // useEffect(() => {
  //   axios.get(CRUD_API_URL)
  //     .then(response => {
  //       response.data.map(data => {
  //         axios.get(`${CRUD_API_URL}/${data}`)
  //           .then(response => {
  //             response.data.map(res => {
  //               unicornStore.dispatch({
  //                 type: 'ADD_UNICORN',
  //                 payload: res
  //               })
  //             })
  //           })
  //       })
  //     })
  // }, [])

  return (
    <Provider store={unicornStore}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/*' element={<Entity />}></Route>
      </Routes>

    </Provider>
  );
}

export default App;
