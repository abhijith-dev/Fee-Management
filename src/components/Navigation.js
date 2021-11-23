import React from 'react'
import '../stylesheets/navigation.css'
import {useSelector,useDispatch} from 'react-redux'
import Admins from '../assets/admin.json'
import {Link} from 'react-router-dom'
import {logout} from '../actions'
import {highlightLink} from '../utils'
export default function Navigation() {
    const [clicked,setClicked] = React.useState(0)
    React.useEffect(()=>{highlightLink()},[clicked])
    let Dispatch = useDispatch()
    let adminPin = useSelector((state)=>state.LoginReducer.isLoggedIn.pin)
    let adminDetails = Admins.filter(admin=>admin.pin === adminPin)
    return (
        <div className = 'navbar'>
            <div className="links">
              <p><Link id="view" onClick={()=>{setClicked(prev=>prev+1)}} className="link" to ="/">View Students</Link></p>
              <p><Link id='entry' onClick={()=>{setClicked(prev=>prev+1)}} className="link" to ="/feesEntry">Fee Entry</Link></p>
              <p><Link id='edit' onClick={()=>{setClicked(prev=>prev+1)}} className="link" to ="/feesManagement">Fees Manager</Link></p>
            </div>
            <div className ="admin">
               <p>{adminDetails[0].name}</p>&nbsp;&nbsp;<i title="logout" onClick={()=>{Dispatch(logout())}} className ="	fa fa-power-off"></i>
            </div>
        </div>
    )
}
