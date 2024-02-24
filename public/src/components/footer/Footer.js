import React from 'react'
import './Footer.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-list">
      
        <div className="footer-list-1">
        <div className='footer-head'>CATEGORIES</div>
            <ul>
             
                <li>Web Builder</li>
                <li>Hosting</li>
                <li>Data Center</li>
                <li>Robotic Automation</li>
            </ul>
        </div>

        <div className="footer-list-1">
        <div className='footer-head'>CONTACT</div>
            <ul>
             
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
                <li>Categories</li>
                <li>About</li>
            </ul>
        </div>

        <div className="footer-list-1">
            <ul>
             
                <li>United States <MdOutlineKeyboardArrowRight color='gray'/></li>
               
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
