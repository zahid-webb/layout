import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

const Layoutone = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layoutone