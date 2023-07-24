import { Provider } from 'react-redux'
import userStore from "./users/Store";
import Home from './components/Home';
import DataList from './components/DataList';
// * Third party Components
import { Routes, Route } from 'react-router-dom'
export const CRUD_API_URL = 'https://crudcrud.com/api/48238e3837be457b9a0bb4d5dfc358aa'


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
    <Provider store={userStore}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/data-list' element={<DataList />}></Route>
      </Routes>

    </Provider>
  );
}

export default App;
