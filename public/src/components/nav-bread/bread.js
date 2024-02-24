import React from 'react'
import './Bread.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Bread = () => {
  return (
    <div className='bread'>
      
{/* options */}
<div className="option">
    <div className="op-1">
        Tools
    </div>
    <div className="op-1">
        AWS Builder
    </div>
    <div className="op-1">
        Start build
    </div>
    <div className="op-1">
        Build  supplies
    </div>
    <div className="op-1">
        Tooling
    </div>
    <div className="op-1">
        BlueHosting
    </div>
</div>

<div className="bcrum">
    <span>Home</span><MdOutlineKeyboardArrowRight color='gray'/>
    <span>Hosting for all</span><MdOutlineKeyboardArrowRight color='gray'/>
    <span>Hosting</span><MdOutlineKeyboardArrowRight color='gray'/>
    <span>Hosting6</span><MdOutlineKeyboardArrowRight color='gray'/>
    <span>Hosting5</span><MdOutlineKeyboardArrowRight color='gray'/>
</div>

    </div>
  )
}

export default Bread
