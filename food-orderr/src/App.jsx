import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './component/Footer/Footer'
import LoginPopup from './component/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrder from './pages/MyOrder/MyOrder'
import Page404 from './component/404/404'
import ProtectedRoute from '../../admin/admin/src/hook/ProtectedRoute'
import Add from './pages/Add/Add'
import Order from './pages/Order/Order'
import List from './pages/List/List'

import { ToastContainer } from 'react-toastify'
import NavbarAdmin from './component/NavbarAdmin/Navbar'
import SideBarAdmin from './component/SideBarAdmin/SideBar'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const location = useLocation()

  // Check if the current path includes "admin"
  const isAdminRoute = location.pathname.startsWith("/admin")

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className='app'>
        <ToastContainer />

        {/* Render Admin Components Only for Admin Routes */}
        {isAdminRoute && (
          <div>
            <NavbarAdmin />
            <hr />
            <div className="app-content">
              <SideBarAdmin />
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
              </Routes>
            </div>
          </div>
        )}

        {!isAdminRoute && <Navbar setShowLogin={setShowLogin} />}

        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorder' element={<MyOrder />} />
          <Route path='/404' element={<Page404 />} />


        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
