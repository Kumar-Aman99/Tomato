import React from 'react'
import Navbar from '../LandingPage/Navbar/Navbar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
     <Navbar />
     <Outlet />
    </>
  )
}

export default Layout