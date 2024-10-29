import React from 'react'
import './Navbartwo.css'
import { Link } from 'react-router-dom'
const Navbartwo = () => {
  return (
    <>
      <nav className='navtwo_main' > 
        <div className="container">
            <div className="navtwo_row ">
                <div className="nav_img">
                  <img src="img/logo1.jpg" alt="l2" />
                  </div>
                <div className="nav_list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/vlog">vlog</Link></li>
                        <li><Link to="/laytwo">Social</Link></li>
                        <li><Link to="/laytwo/about">About</Link></li>
                    </ul>
                </div>
                <div className="search">
                    <input placeholder='Search' type="text" />
                    <button >Go</button>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbartwo