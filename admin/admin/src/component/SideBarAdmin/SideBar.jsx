import React from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to='/admin/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add items</p>
        </NavLink>
        <NavLink to='/admin/list' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List items</p>
        </NavLink>
        <NavLink to='/admin/order' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Order</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar