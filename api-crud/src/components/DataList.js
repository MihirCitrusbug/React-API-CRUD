// * React Components and Hooks
import React, { useState } from 'react'

// * Third party Components
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// * Redux Storage
import userStore from '../users/Store';

// * Custom Components
import TableRows from './TableRows';

// * API URL
import { CRUD_API_URL } from '../App';


const DataList = () => {
    const navigate = useNavigate()
    const [userList, setUserList] = useState(userStore.getState())

    const back = () => {
        navigate("/")
    }

    const refresh = () => {
        axios.get(`${CRUD_API_URL}/users`)
            .then(response => {
                userStore.dispatch({
                    type: 'DELETE_OLD_USERS'
                })
                response.data.map(user => {
                    return userStore.dispatch({
                        type: 'ADD_USER',
                        payload: user
                    })
                })
                setUserList(userStore.getState())
            })
    }
    return (
        <>
            <h1>User List</h1>
            <table className="table table-striped mb-3">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Technology</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="tableBodyData">
                    <TableRows users={userList} setUserList={setUserList} />
                </tbody>
            </table>
            <button className="btn btn-primary ms-2" onClick={back}>Back</button>
            <button className="btn btn-primary ms-2" onClick={refresh}>Refresh</button>
        </>
    )
}

export default DataList
