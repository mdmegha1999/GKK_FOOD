// import React from 'react'
import './Navbar.css'
import logo from "../../assets//yummyfood.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu");
  return (
    <div className='navbar'>
    <Link to='/'><img src={logo} alt="" className='logo' /></Link>
    <ul className="navbar-menu">
    <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
    <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
    <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
    <a href='#footer' onClick={()=>setMenu("contect-us")} className={menu==="contect-us"?"active":""}>contact us</a>
    </ul>
    <div className="navbar-right">
    <IoSearchOutline />

    <div className="navbar-search-icon">
    <Link to='/cart'><FaShoppingBasket /></Link>
    <div className="dot"></div>
    </div>
    <button onClick={()=>setShowLogin(true)}>sign in</button>
    </div>
    </div>
  )
}

export default Navbar