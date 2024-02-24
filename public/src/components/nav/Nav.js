import React from 'react'
import './Nav.css'
import { LuSearch } from "react-icons/lu";

const Nav = () => {
  return (
    <div className='nav'>

      <div className="nav-input">
      <div className="nav-search">
          <LuSearch fontSize='24px' color='gray'/>
        </div>
        <input type="text" />
      </div>

<div className="nav-list">
    <ul>
        <li>Categories</li>
        <li>Website Builders</li>
        <li>Today's Deals</li>
    </ul>
</div>
    </div>
  )
}

export default Nav
