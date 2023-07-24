// * Third party Components
import { useNavigate } from 'react-router-dom';


const TableRows = ({ users, onChange }) => {
    const navigate = useNavigate()

    return (
        <>
            {users && users.map((user, index) => {
                return (
                    <tr draggable="true" key={index}>
                        <td><input className="form-check-input" onChange={onChange} value={user.email} type="checkbox" name="checkbox" /></td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.hobby}</td>
                        <td>{user.technology}</td>
                        <td><button type="button" onClick={() => navigate(`/view-data?email=${user.email}`)} className="btn btn-primary">View</button></td>
                    </tr>
                )
            })}
        </>
    )
}

export default TableRows
