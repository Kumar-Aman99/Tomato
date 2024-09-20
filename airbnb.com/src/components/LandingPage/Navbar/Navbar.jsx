import React from 'react'
import './Navbar.css'
import { assets } from '../../../assets/assets'
import Signup from '../Signup/Signup'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav>
         <div className='navbar'>
             <div className='navbar-logo'>
                <img src={assets.site_logo} alt="" />
             </div>
             <div className='nav-sign-login'>
               <NavLink to='/Signup' >
                    Signup
               </NavLink>
             </div>
         </div>
         
     </nav>    
     
)
}

export default Navbar