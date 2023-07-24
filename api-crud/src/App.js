import React from 'react'
import { Provider } from 'react-redux'
import userStore from "./users/Store";
import Home from './components/Home';
import DataList from './components/DataList';
import ViewUser from './components/ViewUser';
import EditUser from './components/EditUser';

// * Third party Components
import { Routes, Route } from 'react-router-dom'
export const CRUD_API_URL = 'https://crudcrud.com/api/af35fa7cb7b14ae49e9b3e49c857d778'


function App() {

  return (
    <Provider store={userStore}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/data-list' element={<DataList />}></Route>
        <Route path='/view-user/:id' element={<ViewUser />}></Route>
        <Route path='/edit-user/:id' element={<EditUser />} ></Route>
      </Routes>

    </Provider>
  );
}

export default App;
