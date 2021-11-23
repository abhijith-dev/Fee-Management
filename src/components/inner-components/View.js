import React from 'react'
import { viewBasicInfoOfStudent } from '../../functions'
import {useParams} from 'react-router-dom'
import { syncFireStoreToLocalState } from '../../utils'
import {updateFireBaseData} from '../../actions'
import {useDispatch} from  'react-redux'
import '../../stylesheets/dashboard.css'
export default function View() {
    const dispatch = useDispatch()
    const [data,setData] = React.useState([])
    React.useEffect(()=>{
        const sync =async() =>{
            let data = await syncFireStoreToLocalState()
            dispatch(updateFireBaseData(data))
            setData(data)
        }
        sync()
    })
    let {id} = useParams()
    let {ExamFee,HostelFee,CollegeFee,BusFee} = viewBasicInfoOfStudent(data,id)
    return (
        <div className ="view-container">
           <p><span id="head">College Fee</span>  - {CollegeFee ? (<span id ="paid">Paid</span>) : (<span id="notpaid"> Not Paid</span>)}</p> 
           <p><span id="head">Hostel Fee</span>  - {HostelFee ? (<span id ="paid">Paid</span>) : (<span id="notpaid"> Not Paid</span>)}</p> 
           <p><span id="head">Bus Fee</span>  - {BusFee ? (<span id ="paid">Paid</span>) : (<span id="notpaid"> Not Paid</span>)}</p> 
           <p><span id="head">Exam Fee</span>  - {ExamFee ? (<span id ="paid">Paid</span>) : (<span id="notpaid"> Not Paid</span>)}</p> 
        </div>
    )
}
