import React from "react"
import Navbar from "./component/Navbar/Navbar"
import SideBar from "./component/SideBar/SideBar"
import { Routes, Route } from 'react-router-dom'
import Add from "./pages/Add/Add"
import List from "./pages/List/List"
import Order from "./pages/Order/Order"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./hook/ProtectedRoute"
import Page404 from "./component/404/Page404"

function App() {

  return (
    <div>
      <ToastContainer />
      <Navbar />

      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/admin/add" element={
            <ProtectedRoute allowedRoles={[1]}>
              <Add />
            </ProtectedRoute>
          } />
          <Route path="/admin/order" element={
            <ProtectedRoute allowedRoles={[1]}>
              <Order />
            </ProtectedRoute>
          } />
          <Route path="/admin/list" element={
            <ProtectedRoute allowedRoles={[1]}>
              <List />
            </ProtectedRoute>
          } />
          <Route path='/404' element={<Page404 />} />

        </Routes>
      </div>
    </div>
  )
}

export default App
