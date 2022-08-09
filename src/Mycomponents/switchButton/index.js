import React from 'react'
import './switch.css'

function Switch({onClick}) {
    return (
        <div className='switch-btn d-flex'>
            Monthly
            <div className="form-check d-flex form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={onClick}/>
            </div>
            Annualy
        </div>
    )
}

export default Switch
