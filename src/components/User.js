import React from 'react'
import logo from '../media/atompoint.png'

function User() {

    return (

        <div className="User">

            <div className="logo">
                <img src={logo} />
            </div>

            <div className='info'>
                <p>Username Goes Here!</p>
                <a href="#"> Logout </a>
            </div>

        </div>

    )


}

export default User;