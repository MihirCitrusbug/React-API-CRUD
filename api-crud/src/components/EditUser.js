// * React Components and Hooks
import React, { useState, useCallback } from 'react'

// * Third party Components and Hooks
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'

// * Redux Storage
import userStore from '../users/Store';

// * Custom Components
import CustomElements from './CustomElements';
import Gender from './Gender';
import SelectElement from './SelectElement';

// * API URL
import { CRUD_API_URL } from '../App';

const EditUser = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const userData = userStore.getState().filter(user => user._id === id)[0]

    const dataList = () => {
        navigate("/data-list")
    }

    const [firstNameState, setFirstNameState] = useState({ value: userData.firstName, message: '', flag: true });
    const [lastNameState, setLastNameState] = useState({ value: userData.lastName, message: '', flag: true });
    const [emailState, setEmailState] = useState({ value: userData.email, message: '', flag: true });
    const [phoneState, setPhoneState] = useState({ value: userData.phone, message: '', flag: true });
    const [genderState, setGenderState] = useState({ value: userData.gender, message: '', flag: true });
    const [technologyState, setTechnologyState] = useState({ value: userData.technology, message: '', flag: true });


    const checkFirstName = useCallback((firstName) => {
        if (firstName === "") {
            setFirstNameState({ ...firstNameState, value: '', message: 'First name is required.', flag: true })
            return false;
        } else {
            if (firstName.length > 20) {
                setFirstNameState({ ...firstNameState, value: '', message: 'Max 20 character.', flag: true })
                return false;
            }
            setFirstNameState({ ...firstNameState, value: firstName, message: '', flag: false })
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
            setEmailState({ ...emailState, value: email, message: 'Email is required.', flag: true });
            return false
        }
        else if (email.match(email_regex)) {
            setEmailState({ ...emailState, value: email, message: '', flag: false });
            return email
        }
        else {
            setEmailState({ ...emailState, value: email, message: 'Invalid E-mail address!', flag: true });
            return false
        }
    }, [emailState])

    const checkPhone = useCallback((phone) => {
        const phone_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phone === "" || phone === null) {
            setPhoneState({ ...phoneState, value: phone, message: 'Phone No is required.', flag: true })
            return false
        }
        else if (phone.match(phone_regex)) {
            setPhoneState({ ...phoneState, value: phone, message: '', flag: false })
            return phone
        }
        else {
            setPhoneState({ ...phoneState, value: phone, message: 'Invalid Phone No!', flag: true })
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
        if (firstNameState.value && lastNameState.value && emailState.value && phoneState.value && genderState.value && technologyState.value) {
            const user = {
                firstName: firstNameState.value,
                lastName: lastNameState.value,
                email: emailState.value,
                phone: phoneState.value,
                gender: genderState.value,
                technology: technologyState.value
            }
            axios.put(`${CRUD_API_URL}/users/${id}`, user)
                .then((res) => {
                    user._id = id
                    userStore.dispatch({
                        type: 'EDIT_USER',
                        payload: user
                    })
                    Swal.fire('User Updated', 'User Data Updated successfully!', 'success')
                        .then(() => {
                            navigate("/data-list")
                        });
                })
                .catch(() => {
                    Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!', })
                        .then(() => {
                            navigate('/data-list')
                        })
                })

        }
        else {
            firstNameState.value || setFirstNameState({ ...firstNameState, value: '', message: firstNameState.message || 'First name is required.', flag: true })
            lastNameState.value || setLastNameState({ ...lastNameState, value: '', message: lastNameState.message || 'Last name is required.', flag: true })
            emailState.value || setEmailState({ ...emailState, value: '', message: emailState.message || 'Email is required.', flag: true })
            phoneState.value || setPhoneState({ ...phoneState, value: '', message: phoneState.message || 'Phone No is required.', flag: true })
            genderState.value || setGenderState({ ...genderState, value: '', message: 'Please select your Gender!', flag: true })
            technologyState.value || setTechnologyState({ ...technologyState, value: '', message: technologyState.message || 'Please select any one Technology!', flag: true })
        }
    }

    return (
        <>
            <h2 className="mb-2">Update data</h2>
            <form className="container" method="post" action="" noValidate>
                <CustomElements
                    id="firstName" type="text" text="First name"
                    value={firstNameState.value}
                    onChange={(e) => checkFirstName(e.target.value.trim())}
                    InputFieldState={firstNameState}
                />

                <CustomElements
                    id="lastName" type="text" text="Last name"
                    value={lastNameState.value}
                    onChange={(e) => checkLastName(e.target.value.trim())}
                    InputFieldState={lastNameState}
                />

                <CustomElements
                    id="email" type="email" text="Email address"
                    onChange={(e) => checkEmail(e.target.value.trim())}
                    value={emailState.value}
                    InputFieldState={emailState}
                />

                <CustomElements
                    id="phoneNo" type="number" text="Phone no."
                    value={phoneState.value}
                    onChange={(e) => checkPhone(e.target.value.trim())}
                    InputFieldState={phoneState}
                />

                <label className="form-label">Gender</label>
                <div className="input-group mb-3">
                    <Gender
                        gender={genderState.value}
                        onChange={(e) => checkGender(e.target.value)}
                        RadioFieldState={genderState}
                    />
                </div>

                <SelectElement
                    id={"technology"}
                    technologyList={technologyState.value.split(',')}
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
