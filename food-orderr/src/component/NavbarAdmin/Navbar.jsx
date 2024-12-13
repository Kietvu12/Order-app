import React from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
const NavbarAdmin = () => {
  return (
    <div className="navbar">
      <img src={assets.logoAdmin} alt="" className="logo" />
      <img src={assets.profile_image} alt="" className="profile" />
    </div>
  )
}

export default NavbarAdmin