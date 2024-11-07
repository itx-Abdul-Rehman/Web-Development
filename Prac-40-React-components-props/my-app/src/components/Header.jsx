import React from 'react'
import logo from './images/Vector.png'
import './index.css'

const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
          <h1>FASHION</h1>
        </div>

        <div className="lists">
          <ul>
            <li>CATALOGUE</li>
            <li>FASHION</li>
            <li>FAVOURITE</li>
            <li>LIFESTYLE</li>
          </ul>
          <div className='button'>
          <button>SIGN UP</button>
        </div>
        </div>

       


      </nav>
    </div>
  )
}

export default Header
