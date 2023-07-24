// * React Components
import React from 'react'

const Gender = ({ gender, onChange, RadioFieldState, disabled }) => {
    const genderList = ["male", "female", "other"]

    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className="input-group mb-3">
            {genderList.map((text, index) => {
                return (
                    <div className="form-check ml-3" key={index}>
                        <input className="form-check-input" disabled={disabled} onChange={onChange} type="radio" name="gender" id={text}
                            value={text} checked={gender === text} />
                        <label className="form-check-label" htmlFor={text}>{capitalizeFirstLetter(text)}</label>
                    </div>)
            })}
            {RadioFieldState.flag && (<div className="invalid-feedback2">{RadioFieldState.message}</div>)}
        </div >
    )
}

export default React.memo(Gender)
