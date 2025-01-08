import React from "react";
import Navbar from "./components/Navbar";
import Trackerdashboard from "./components/Trackerdashboard";
import Table from "./components/Table";
import Modal from "./components/Modal";
import { useState } from "react";
import "./index.css"

function App()
{
  const [modalOpen,setModalOpen] = useState(false);
  const rows = [
    {SlNo:"1",companyname:"google",jobrole:"sde-1",applieddate:"01/01/2025",status:"applied"},
    {SlNo:"2",companyname:"AMD",jobrole:"sde-2",applieddate:"01/01/2025",status:"applied"},
    {SlNo:"3",companyname:"dell",jobrole:"sde-3",applieddate:"01/01/2025",status:"applied"}
  ]
  return <div>
    <Navbar/>
    <Trackerdashboard/>
    <Table rows= {rows}/>
    <button className="btn" onClick={()=>{setModalOpen(true)}}>Add</button>
    { modalOpen && <Modal closeModal ={()=>{setModalOpen(false)} }/>}
  </div>
}

export default App;