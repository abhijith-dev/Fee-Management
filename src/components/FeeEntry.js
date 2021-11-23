import React from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Students from '../assets/students.json'
import '../stylesheets/dashboard.css'
export default function FeeEntry() {
    const [searchkey,setSearchKey] = React.useState('')
    const [students,setStudents] = React.useState(Students)
    const columns = [
        {
            name: 'USN',
            selector: row => row.usn
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable:true
        },
        {
            name:'Semster',
            selector: row => row.sem,
            sortable:true
        },
        {
            name:'Department',
            selector: row => row.dept
        },
        {
            name:'Actions',
            selector: row => <Link to={`/feesEntry/${row.usn}`}><button>fee entry</button></Link>, 
        },

    ];
    const searchHandler =() =>{
       let filteredStudent = Students.filter(student =>{
           return student.name.includes(searchkey) || student.usn.includes(searchkey)
       })
       setStudents(filteredStudent)
    }
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
    return (
        <div className ="dashboard-container">
        <div className="search-container">
        <input type="text" onChange={(e)=>{setSearchKey(e.target.value)}} placeholder="search student"/>
        <button onClick={searchHandler}>search</button>
        </div>
        <div className="table">
        <DataTable
            columns={columns}
            data={students}
            pagination
            customStyles={customStyles}
            sortIcon ={<i className ="fa fa-sort"></i>}
        />
        </div>
        </div>
    )
}
