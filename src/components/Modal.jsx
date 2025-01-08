import React from 'react'
import "./Modal.css"

const Modal = ({closeModal}) => {
  return (
    <div className='modal-container'onClick={(e)=>{
        if(e.target.className === "modal-container")closeModal();
    }} >
      <div className="modal">
        <form action="">
            <div className='form-group'>
                <label htmlFor="Sl no">SL No</label>
                <input type="SlNO" />
            </div> 
            <div className='form-group'>
                <label htmlFor="companyname">Company Name</label>
                <input type="companyname" />
            </div> 
            <div className='form-group'>
                <label htmlFor="jobrole">Job Role</label>
                <input type="jobrole" />
            </div> 
            <div className='form-group'>
                <label htmlFor="applieddate">Applied Date</label>
                <input type="applieddate" />
            </div> 
            <div className='form-group'>
                <label htmlFor="Status">Status</label>
                <select name="status" id="">
                    <option value="applied">Applied</option>
                    <option value="rejected">Rejected</option>
                    <option value="ongoing">On going</option>
                </select>
            </div> 
            <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Modal
