import React from 'react'
import './Head.css'
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Head = () => {
  return (
    <div className='head'>
      <div className="head-title">
        Best Website Builder in the US
      </div>
      <hr />
      <div className="head-down"> 
     <div className="head-down-1">
     <CiCircleCheck fontSize='22px'/> <span>Last Updated - Feburary 22,2020</span></div> <div className="head-down-2">
     <CiCircleInfo fontSize='22px'/> <span>Advertising Disclosure</span>
     </div>
     <div className="head-down-3">
        <span>Top Relevant</span> <IoIosArrowDown/>
     </div>
      </div>

      <hr />
    </div>
  )
}

export default Head
