import React from "react"
import Navbar from "./component/Navbar/Navbar"
import SideBar from "./component/SideBar/SideBar"
import {Routes, Route} from 'react-router-dom'
import Add from "./pages/Add/Add"
import List from "./pages/List/List"
import Order from "./pages/Order/Order"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <ToastContainer />
      <Navbar/>
      <hr />
      <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path = '/add' element = {<Add/>}></Route>
          <Route path = '/list' element = {<List/>}></Route>
          <Route path = '/order' element = {<Order/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
