import React from 'react'

import Login from './components/Login'
import {useSelector} from 'react-redux'
import DashboardRouting from './DashboardRouting'

export default function Routing() {
    const adminLogin = useSelector((state)=>state.LoginReducer.isLoggedIn)
    return (
        <div>
               { adminLogin.status && adminLogin.pin ? (<DashboardRouting />) :(<Login />)}
        </div>
    )
}
