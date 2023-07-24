import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import userStore from '../users/Store';

import CustomElements from './CustomElements';
import Gender from './Gender';
import SelectElement from './SelectElement';

const ViewUser = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const doNothing = () => {
        return
    }
    const dataList = () => {
        navigate("/data-list")
    }

    const userData = userStore.getState().filter(user => user._id === id)[0]
    return (
        <>
            {userData && (
                <>
                    <h2 className="mb-2">User Information</h2>
                    <form method="post" action="" noValidate>
                        <CustomElements
                            id="firstName" type="text" text="First name" disabled={true}
                            value={userData.firstName} onChange={doNothing} InputFieldState=''
                        />

                        <CustomElements
                            id="lastName" type="text" text="Last name" disabled={true}
                            value={userData.lastName} onChange={doNothing} InputFieldState=''
                        />

                        <CustomElements
                            id="email" type="email" text="Email address" disabled={true}
                            value={userData.email} onChange={doNothing} InputFieldState=''
                        />

                        <CustomElements
                            id="phone" type="text" text="Phone no." disabled={true}
                            value={userData.phone} onChange={doNothing} InputFieldState=''
                        />

                        <label className="form-label">Gender</label>
                        <Gender
                            gender={userData.gender}
                            disabled={true}
                            onChange={doNothing}
                            RadioFieldState=''
                        />

                        <SelectElement
                            id="technology"
                            technologyList={userData.technology.split(',')}
                            onChange={doNothing}
                            SelectFieldState=''
                            disabled={true}
                        />

                        <button onClick={dataList} className="btn btn-primary">Back</button>
                    </form>
                </>
            )}
        </>
    )
}

export default ViewUser
