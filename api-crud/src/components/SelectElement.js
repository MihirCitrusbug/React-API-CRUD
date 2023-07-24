// * React Components
import React from 'react'

// * Custom Components
import Options from './Options'

const SelectElement = ({ id, onChange, technologyList, SelectFieldState, disabled }) => {
    const technologies = ["python", "php", "html", "css", "javascript"]

    return (
        <div className="row  mb-3 ">
            <div className="col-lg-4 col-md-6 d-flex  align-items-center">
                <div className="inline w-100 field">
                    <label>Technology</label>
                    <select name={id} disabled={disabled} id={id} onChange={onChange} multiple
                        className="label ui selection fluid dropdown">
                        {technologies.map((technology, index) => {
                            return <Options value={technology} key={index} isSelected={technologyList && technologyList.includes(technology)} />
                        })}
                    </select>
                </div>
            </div>
            {SelectFieldState.flag && (<div className="invalid-feedback2">{SelectFieldState.message}</div>)}
        </div>
    )
}

export default React.memo(SelectElement)
