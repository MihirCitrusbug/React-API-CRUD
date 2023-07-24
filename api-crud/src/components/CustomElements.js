// * React Components
import React from 'react'

const CustomElements = ({ id, type, text, value, disabled, onChange, InputFieldState }) => {

    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{text}</label>
            <input type={type} value={value} disabled={disabled} onChange={onChange} className="form-control" id={id} />
            {InputFieldState && InputFieldState.flag && (<div className="invalid-feedback2">{InputFieldState.message}</div>)}
        </div>
    )
}

export default React.memo(CustomElements)
