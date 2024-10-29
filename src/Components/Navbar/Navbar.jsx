import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='nav_main'> 
    <div className="container">
        <div className="nav_row ">
            <div className="nav_img">
                <img src="img/logo1.jpg" alt="l1" />
            </div>
            <div className="nav_list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/vlog">vlog</Link></li>
                    <li><Link to="/laytwo">Social</Link></li>
                    <li><Link to="/laytwo/about">About</Link></li>
                </ul>
            </div>
        </div>
    </div>
</nav>
  )
}

export default Navbar