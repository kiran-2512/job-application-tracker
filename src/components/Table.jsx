import React from 'react'
import "../index.css"
import "./Table.css"
import {BsFillTrashFill,BsFillPencilFill} from "react-icons/bs"

const Table = ({rows}) => {
  return (
    <div className='table-box'>
      <table className='table'>
        <thead>
            <tr>
                <th>Sl No</th>
                <th className='expand'>Company Name</th>
                <th className='expand'>Job Role</th>
                <th>Applied Date</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody >
        {
            rows.map((row,idx)=>{
                return <tr key = {idx}></tr>
            })
        }
            <tr>
              <td>1</td>
            <td className='table-data-company-name'>AMD</td>
            <td>SDE-1</td>
            <td>01/01/2025</td>
            <td><span className='label label-applied'>Applied</span></td>
            <td>
            <span className='actions'>
                <BsFillTrashFill className='delete-btn'/>
                <BsFillPencilFill/>
            </span>
             </td>
            </tr>
              <tr>
              <td>1</td>
            <td className='table-data-company-name'>AMD</td>
            <td>SDE-1</td>
            <td>01/01/2025</td>
            <td><span className='label label-ongoing'>Ongoing</span></td>
            <td>
            <span className='actions'>
                <BsFillTrashFill className='delete-btn'/>
                <BsFillPencilFill/>
            </span>
             </td>
            </tr>
            <tr>
              <td>1</td>
            <td className='table-data-company-name'>AMD</td>
            <td>React developer intern</td>
            <td>01/01/2025</td>
            <td><span className='label label-rejected'>Rejected</span></td>
            <td>
            <span className='actions'>
                <BsFillTrashFill className='delete-btn'/>
                <BsFillPencilFill/>
            </span>
             </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
