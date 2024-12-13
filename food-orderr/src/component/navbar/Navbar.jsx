import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Menu, ChevronDown, Facebook, Twitter, Youtube, Instagram, User } from 'lucide-react';
import LoginPopup from '../LoginPopup/LoginPopup';
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets';
export default function HeaderNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogin = (token) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        setShowLoginPopup(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setShowUserDropdown(false);
    };

    const toggleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
    };

    return (
        <header className="w-full">
            <div className="bg-[#37A345] text-white py-2 px-4">
                <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Address, Fax 99 Roving St, Big City PKU</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>hello@awesomesite.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>+123-234-1234</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:text-gray-200 transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="hover:text-gray-200 transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="hover:text-gray-200 transition-colors">
                                <Youtube className="w-4 h-4" />
                            </a>
                            <a href="#" className="hover:text-gray-200 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="bg-white shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 relative">
                                <div className="w-full h-full rounded-full bg-[#37A345] flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">L</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-[#37A345] leading-none">LOVEIT</span>
                                <span className="text-xs text-gray-600">RESTAURANT</span>
                            </div>
                        </div>

                        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <Menu className="w-6 h-6" />
                        </button>

                        <div className={`absolute lg:relative top-20 left-0 lg:top-0 bg-white lg:bg-transparent
                            ${isMenuOpen ? 'block' : 'hidden'} lg:block shadow-lg lg:shadow-none z-50`}>
                            <ul className="flex flex-col lg:flex-row items-center gap-6 p-4 lg:p-0">
                                <li><a href="#" className="block py-2 text-gray-900 hover:text-[#37A345] font-medium">HOMEPAGE</a></li>
                                <li><a href="#" className="block py-2 text-gray-900 hover:text-[#37A345] font-medium">ABOUT US</a></li>
                                <li className="relative group">
                                    <a href="#" className="block py-2 text-gray-900 hover:text-[#37A345] font-medium inline-flex items-center gap-1">MENU<ChevronDown className="w-4 h-4" /></a>
                                </li>
                                <li className="relative group">
                                    <a href="#" className="block py-2 text-gray-900 hover:text-[#37A345] font-medium inline-flex items-center gap-1">PAGE<ChevronDown className="w-4 h-4" /></a>
                                </li>
                                <li><a href="#" className="block py-2 text-gray-900 hover:text-[#37A345] font-medium">RESERVATION</a></li>
                                {isLoggedIn ? (
                                    <div className="relative group">
                                        <div className="flex items-center gap-2 cursor-pointer" onClick={toggleUserDropdown}>
                                            <User className="w-6 h-6 text-[#37A345]" />
                                            <span className="text-gray-900 font-medium">Account</span>
                                            <ChevronDown className="w-4 h-4" />
                                        </div>
                                        <ul className={`navbar-profile-dropdown absolute right-0 bg-white shadow-lg z-50 w-48 ${showUserDropdown ? 'block' : 'hidden'}`}>
                                            <li onClick={() => navigate('/myorder')}><img src={assets.bag_icon} className='max-h-5 text-[#37A345]' alt="" /><p>Profile</p></li>
                                            <li onClick={() => navigate('/myorder')}><img src={assets.bag_icon} className='max-h-5 text-[#37A345]' alt="" /><p>Orders</p></li>
                                            <li onClick={handleLogout}><img src={assets.bag_icon} className='max-h-5 text-[#37A345]' alt="" /><p>Logout</p></li>
                                        </ul>
                                    </div>
                                ) : (
                                    <button onClick={() => setShowLoginPopup(true)} className="py-2 text-gray-900 hover:text-[#37A345] font-medium">Login</button>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {showLoginPopup && (
                <div className="overlay">
                    <LoginPopup setShowLogin={setShowLoginPopup} onLogin={handleLogin} />
                </div>
            )}
        </header>
    );
}
