// * Third party Components
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

// * Redux Storage
import userStore from '../users/Store';

// * API URL
import { CRUD_API_URL } from '../App';


const TableRows = ({ users, setUserList }) => {
    const navigate = useNavigate()

    const deleteUser = (id) => {
        Swal.fire({
            title: 'Do you want to Delete this User?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${CRUD_API_URL}/users/${id}`)
                    .then(() => {
                        userStore.dispatch({
                            type: 'REMOVE_USER',
                            payload: {
                                id: id
                            }
                        })
                        setUserList(userStore.getState())
                        Swal.fire('User Deleted', 'User Deleted successfully!', 'success')
                            .then(() => {
                                navigate('/data-list')
                            })
                    })
                    .catch(() => {
                        Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!', })
                            .then(() => {
                                navigate('/data-list')
                            })
                    })

            }
        })
    }

    return (
        <>
            {users && users.map((user, index) => {
                return (
                    <tr draggable="true" key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.gender}</td>
                        <td>{user.technology}</td>
                        <td>
                            <button type="button" onClick={() => navigate(`/view-user/${user._id}`)} className="btn btn-primary">View</button>
                            <button type="button" onClick={() => navigate(`/edit-user/${user._id}`)} className="btn btn-warning ms-2">Edit</button>
                            <button type="button" onClick={() => deleteUser(user._id)} className="btn btn-danger ms-2">Delete</button>
                        </td>
                    </tr>
                )
            })}
        </>
    )
}

export default TableRows
