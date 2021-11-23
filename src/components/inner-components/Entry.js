import React from 'react'
import {Link, useParams} from 'react-router-dom'
import  {insertFeesDetailsOfStudent} from '../../functions'
import '../../stylesheets/dashboard.css'
import { useAlert } from "react-alert";
export default function Entry() {
    const alert = useAlert();
    let {id} = useParams()
    const [type,setType] = React.useState('')
    const [amount,setAmount] = React.useState('')
    const [busNo,setBusNo] = React.useState('')
    let alertStyle ={textTransform:"capitalize",fontFamily:"Verdana, Geneva, Tahoma, sans-serif",width:"15rem"}
    const submitHandler = (e)=>{
      let date = new Date()
      e.preventDefault()
      let data = {
          type,
          amount,
          usn :id,
          date : date.toDateString()
      }
      if(type === 'Bus Fee')data['busNo'] = busNo
      insertFeesDetailsOfStudent(data)
      alert.success (<div style ={alertStyle}>{`${id} payed ${type} of amount ${amount} successfully`}</div>)
      setType('')
      setAmount('')
      setBusNo('')
    }
    return (
        <div className ="entry-conatiner">
            <h2>Student Fee Form</h2>
           <form className ="form-container" onSubmit ={submitHandler}>
              <select className="selector" placeholder ="Fee Type"  onChange= {e=>{setType(e.target.value)}} required>
                  <option className="opt" disabled selected>Select Type of Fee</option>
                  <option className="opt"  value={"College Fee"} >College Fee</option>
                  <option className="opt"  value={"Hostel Fee"} >Hostel Fee</option>
                  <option className="opt"  value={"Bus Fee"} >Bus Fee</option>
                  <option className="opt"  value={"Exam Fee"} >Exam Fee</option>
              </select>
              {type === 'Bus Fee' ? (<><input type ="number" value={busNo} placeholder ="Enter Bus Number" onChange={e=>{setBusNo(e.target.value)}} required/></>):null}
              <input type ="number" value={amount} placeholder ="Enter Amount" onChange ={e=>{setAmount(e.target.value)}} required/>
              <div className ="btn-container">
              <Link to='/feesEntry'><button type="submit" >back</button></Link>
              <button type="submit" >Submit</button>
              </div>
           </form>
        </div>
    )
}
