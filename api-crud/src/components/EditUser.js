import React, { useState, useCallback } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import userStore from '../users/Store';


import CustomElements from './CustomElements';
import Gender from './Gender';
import SelectElement from './SelectElement';

const EditUser = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const dataList = () => {
        navigate("/data-list")
    }


    const [firstNameState, serFirstNameState] = useState({ value: '', message: '', flag: true });
    const [lastNameState, setLastNameState] = useState({ value: '', message: '', flag: true });
    const [emailState, setEmailState] = useState({ value: '', message: '', flag: true });
    const [phoneState, setPhoneState] = useState({ value: '', message: '', flag: true });
    const [genderState, setGenderState] = useState({ value: '', message: '', flag: true });
    const [technologyState, setTechnologyState] = useState({ value: '', message: '', flag: true });


    const checkFirstName = useCallback((firstName) => {
        if (firstName === "") {
            serFirstNameState({ ...firstNameState, value: '', message: 'First name is required.', flag: true })
            return false;
        } else {
            if (firstName.length > 20) {
                serFirstNameState({ ...firstNameState, value: '', message: 'Max 20 character.', flag: true })
                return false;
            }
            serFirstNameState({ ...firstNameState, value: firstName, message: '', flag: false })
            return firstName
        }
    }, [firstNameState])

    const checkLastName = useCallback((lastName) => {
        if (lastName === "") {
            setLastNameState({ ...lastNameState, value: '', message: 'Last name is required.', flag: true })
            return false;
        } else {
            if (lastName.length > 20) {
                setLastNameState({ ...lastNameState, value: '', message: 'Max 20 character.', flag: true })
                return false;
            }
            setLastNameState({ ...lastNameState, value: lastName, message: '', flag: false })
        }
    }, [lastNameState])

    const checkEmail = useCallback((email) => {
        // eslint-disable-next-line no-empty-character-class
        const email_regex = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/
        if (email === "" || email === null) {
            setEmailState({ ...emailState, value: '', message: 'Email is required.', flag: true });
            return false
        }
        else if (email.match(email_regex)) {
            setEmailState({ ...emailState, value: email, message: '', flag: false });
            return email
        }
        else {
            setEmailState({ ...emailState, value: '', message: 'Invalid E-mail address!', flag: true });
            return false
        }
    }, [emailState])

    const checkPhone = useCallback((phone) => {
        const phone_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phone === "" || phone === null) {
            setPhoneState({ ...phoneState, value: '', message: 'Phone No is required.', flag: true })
            return false
        }
        else if (phone.match(phone_regex)) {
            setPhoneState({ ...phoneState, value: phone, message: '', flag: false })
            return phone
        }
        else {
            setPhoneState({ ...phoneState, value: '', message: 'Invalid Phone No!', flag: true })
            return false
        }
    }, [phoneState])

    const checkGender = useCallback((gender) => {
        setGenderState({ ...genderState, value: gender, message: '', flag: false })
    }, [genderState])

    const checkTechnology = useCallback(() => {
        const technologyOpt = document.getElementById('technology').options
        if (technologyOpt.selectedIndex !== -1) {
            let technology = ''
            for (let i = 0; i < technologyOpt.length; i++) {
                if (technologyOpt[i].selected) {
                    technology += `${technologyOpt[i].value},`
                }
            }
            setTechnologyState({ ...technologyState, value: technology.replace(/.$/, ''), message: '', flag: false })
            return technology.replace(/.$/, '')
        }
        else {
            setTechnologyState({ ...technologyState, value: '', message: 'Please select any one Technology!', flag: true })
            return false
        }
    }, [technologyState])


    const updateUser = () => {
        console.log("UserData Update")
        console.log("userData.phone =", userData.phone)
    }

    userStore.dispatch({
        type: 'GET_USER',
        payload: {
            id: id
        }
    })

    const userData = userStore.getState()[0]
    return (
        <>
            <h2 className="mb-2">Update data</h2>
            <form className="container" method="post" action="" noValidate>
                <CustomElements
                    id="firstName" type="text" text="First name"
                    value={userData.firstName}
                    onChange={(e) => checkFirstName(e.target.value.trim())}
                    InputFieldState={firstNameState}
                />

                <CustomElements
                    id="lastName" type="text" text="Last name"
                    value={userData.lastName}
                    onChange={(e) => checkLastName(e.target.value.trim())}
                    InputFieldState={lastNameState}
                />

                <CustomElements
                    id="email" type="email" text="Email address" disabled={true}
                    onChange={(e) => checkEmail(e.target.value.trim())}
                    value={userData.email} InputFieldState=''
                />

                <CustomElements
                    id="phoneNo" type="number" text="Phone no."
                    value={userData.phone}
                    onChange={(e) => checkPhone(e.target.value.trim())}
                    InputFieldState={phoneState}
                />

                <label className="form-label">Gender</label>
                <div className="input-group mb-3">
                    <Gender
                        gender={userData.gender}
                        onChange={(e) => checkGender(e.target.value)}
                        RadioFieldState={genderState}
                    />
                </div>

                <SelectElement
                    id={"technology"}
                    technologyList={userData.technology.split(',')}
                    onChange={(e) => checkTechnology(e)}
                    SelectFieldState={technologyState}
                />

                <button type="button" onClick={updateUser} className="btn btn-success">Update</button>
                <button onClick={dataList} className="btn btn-primary">Back</button>
            </form>

        </>
    )
}

export default EditUser
