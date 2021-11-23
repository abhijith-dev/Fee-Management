import React from 'react'
import {useParams} from 'react-router-dom'
import { syncFireStoreToLocalState } from '../../utils'
import {updateFireBaseData} from '../../actions'
import {useDispatch} from  'react-redux'
import DataTable from 'react-data-table-component'
import '../../stylesheets/dashboard.css'
import database from '../../firebase'
import {doc,deleteDoc} from '@firebase/firestore'
export default function Info() {
    const customStyles = {
        rows: {
            style: {
               backgroundColor :'#fff'  
            },
        },
        headCells: {
            style: {
                fontFamily :'Verdana, Geneva, Tahoma, sans-serif',
                fontWeight:'600',
                fontSize:'0.8rem',
                backgroundColor :'rgb(247, 240, 240)'
            },
        },
        cells: {
            style: {
                fontFamily :'Verdana, Geneva, Tahoma, sans-serif'
            },
        },
    };
    const dispatch = useDispatch()
    const [data,setData] = React.useState([])
    const [del,setDel] = React.useState(0)
    React.useEffect(()=>{
        const sync =async() =>{
            let data = await syncFireStoreToLocalState()
            dispatch(updateFireBaseData(data))
            setData(data)
        }
        sync()
    },[del])

    const deleteRecord = async(id) =>{
        let document = doc(database,"feesCollection",id)
        await deleteDoc(document)
        setDel(prev =>prev+1)
    }
    const columns = [
        {
            name: 'USN',
            selector: row => row.usn
        },
        {
            name: 'Fee Type',
            selector: row => row.type,
            sortable:true
        },
        {
            name:'Amount',
            selector: row => row.amount,
            sortable:true
        },
        {
            name:'Date',
            selector: row => row.date
        },
        {
            name:'Delete',
            selector: row => <button onClick ={()=>{deleteRecord(row.id)}}><i className="fa fa-trash-o"></i></button>, 
        },

    ];
    let {id} = useParams()
    let filterData = data.filter(doc=>doc.usn === id)
    return (
        <div>
              <div className="table">
        <DataTable
            columns={columns}
            data={filterData}
            pagination
            customStyles={customStyles}
            sortIcon ={<i className ="fa fa-sort"></i>}
        />
        </div>
        </div>
    )
}
