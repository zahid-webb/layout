import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbartwo from '../Components/Navbar2/Navbartwo'


const Layouttwo = () => {
  return (
    <>
    <Navbartwo/>
    <Outlet/>
    </>
  )
}

export default Layouttwo