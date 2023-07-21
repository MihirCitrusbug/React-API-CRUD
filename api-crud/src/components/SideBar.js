import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { CRUD_API_URL } from '../App'

const SideBar = () => {
    const navigate = useNavigate()
    const [entityList, setEntityList] = useState([])

    useEffect(() => {
        axios.get(CRUD_API_URL)
            .then(response => {
                setEntityList(response.data)
            })
    }, [])

    return (
        <>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">LIST</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <ul className='list-group'>
                            {entityList.map((entity, index) => {
                                return <li key={index} onClick={() => navigate('/' + entity)} className='list-group-item bg-primary text-light'>{entity}</li>
                            })}
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar
