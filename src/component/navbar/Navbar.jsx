// import React from 'react'
import './Navbar.css'
import logo from "../../assets/gkk-logo.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
    <img src={logo} alt="" className='logo' />
    <ul className="navbar-menu">
    <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
    <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
    <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
    <li onClick={()=>setMenu("contect-us")} className={menu==="contect-us"?"active":""}>contact us</li>
    </ul>
    <div className="navbar-right">
    <IoSearchOutline />

    <div className="navbar-search-icon">
    <FaShoppingBasket />
    <div className="dot"></div>
    </div>
    <button>sign in</button>
    </div>
    </div>
  )
}

export default Navbar