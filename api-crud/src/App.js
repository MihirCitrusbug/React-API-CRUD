// * Third party Components
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

// * Redux Storage
import userStore from "./users/Store";

// * Custom Components
import Home from './components/Home';
import DataList from './components/DataList';
import ViewUser from './components/ViewUser';
import EditUser from './components/EditUser';

// * API URL
export const CRUD_API_URL = 'https://crudcrud.com/api/b27fbe5e256c41c6b06ec2d3859d8916'

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
