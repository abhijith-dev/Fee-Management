import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export default function Bus() {
    let {id} = useParams()
    let data = useSelector(state=>state.FeeReducer.data)  
    let studentsDetails = data.filter(doc => doc.type === 'Bus Fee' && doc.usn === id)
    if(!studentsDetails.length)alert("student not paid bus fee")
    return (
        <div>

        </div>
    )
}
