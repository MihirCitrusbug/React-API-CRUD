// * React Components and Hooks
import React, { useState, useCallback } from 'react'

// * Third party Components
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

// * Redux Storage
import userStore from '../users/Store'

// * Custom Components
import CustomElements from './CustomElements'
import Gender from './Gender'
import SelectElement from './SelectElement'

// * API URL
import { CRUD_API_URL } from '../App';


const Home = () => {

    const navigate = useNavigate()

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

    const submitForm = () => {
        if (!firstNameState.flag && !lastNameState.flag && !emailState.flag && !phoneState.flag && !genderState.flag && !technologyState.flag) {
            const user = {
                firstName: firstNameState.value,
                lastName: lastNameState.value,
                email: emailState.value,
                phone: phoneState.value,
                gender: genderState.value,
                technology: technologyState.value
            }
            axios.post(`${CRUD_API_URL}/users`, user)
                .then((res) => {
                    user._id = res.data._id
                    userStore.dispatch({
                        type: 'ADD_USER',
                        payload: user
                    })
                    Swal.fire('User Registered', 'New User Registered successfully!', 'success')
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
        else {
            !firstNameState.flag || serFirstNameState({ ...firstNameState, value: '', message: firstNameState.message || 'First name is required.', flag: true })
            !lastNameState.flag || setLastNameState({ ...lastNameState, value: '', message: lastNameState.message || 'Last name is required.', flag: true })
            !emailState.flag || setEmailState({ ...emailState, value: '', message: emailState.message || 'Email is required.', flag: true })
            !phoneState.flag || setPhoneState({ ...phoneState, value: '', message: phoneState.message || 'Phone No is required.', flag: true })
            !genderState.flag || setGenderState({ ...genderState, value: '', message: 'Please select your Gender!', flag: true })
            !technologyState.flag || setTechnologyState({ ...technologyState, value: '', message: technologyState.message || 'Please select any one Technology!', flag: true })
        }
    }

    const dataList = () => {
        navigate("/data-list");
    }

    return (
        <>
            <h2 className="mb-3">Register Form</h2>
            <form method="post" action="" noValidate>
                <CustomElements
                    id="firstName" type="text" text="First name"
                    onChange={(e) => checkFirstName(e.target.value.trim())}
                    InputFieldState={firstNameState}
                />

                <CustomElements
                    id="lastName" type="text" text="Last name"
                    onChange={(e) => checkLastName(e.target.value.trim())}
                    InputFieldState={lastNameState}
                />

                <CustomElements
                    id="email" type="email" text="Email address"
                    onChange={(e) => checkEmail(e.target.value.trim())}
                    InputFieldState={emailState}
                />

                <CustomElements
                    id="phone" type="number" text="Phone no."
                    onChange={(e) => checkPhone(e.target.value.trim())}
                    InputFieldState={phoneState}
                />

                <label className="form-label">Gender</label>
                <Gender
                    gender={genderState.value}
                    onChange={(e) => checkGender(e.target.value)}
                    RadioFieldState={genderState}
                />

                <SelectElement
                    id="technology"
                    technologyList=''
                    onChange={checkTechnology}
                    SelectFieldState={technologyState}
                />

                <button type="button" onClick={submitForm} className="btn btn-primary mx-1">Submit</button>
                <button onClick={dataList} className="btn btn-success mx-1">View List</button>
            </form>
        </>
    )
}

export default Home
