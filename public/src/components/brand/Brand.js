import React from 'react'
import './Brand.css'
import image from '../assets/download 1.png'

const Brand = () => {
  return (
    <div className='brand'>
      
<div className="brand-head">Related deals you might like for</div>

<div className="brand-products">

    {/* 1 */}

    <div className="b-p-1">

        <div className="b-p-img">
            <img src={image} alt="" />
        </div>

<div className="b-p-offer">
    <div className="offer-1">
        20% off
    </div>
    <div className="offer-2">
        Limited Time
    </div>
</div>

<div className="b-p-heading">
    Webbuilder1
</div>

<div className="b-p-title">
    Computer modern classic with wix support
</div>

<div className="b-p-price">
    <div className="price-1">
        $39.96
    </div>
    <div className="price-2">
        $49.96
    </div>
    <div className="price-3">
     (20% off)
    </div>
</div>

<button className='view'>View Deal</button>

    </div>


{/* 2 */}

<div className="b-p-1">

<div className="b-p-img">
    <img src={image} alt="" />
</div>

<div className="b-p-offer">
<div className="offer-1">
20% off
</div>
<div className="offer-2">
Limited Time
</div>
</div>

<div className="b-p-heading">
Webbuilder1
</div>

<div className="b-p-title">
Computer modern classic with wix support
</div>

<div className="b-p-price">
<div className="price-1">
$39.96
</div>
<div className="price-2">
$49.96
</div>
<div className="price-3">
(20% off)
</div>
</div>

<button className='view'>View Deal</button>

</div>


{/* 3 */}


<div className="b-p-1">

<div className="b-p-img">
    <img src={image} alt="" />
</div>

<div className="b-p-offer">
<div className="offer-1">
20% off
</div>
<div className="offer-2">
Limited Time
</div>
</div>

<div className="b-p-heading">
Webbuilder1
</div>

<div className="b-p-title">
Computer modern classic with wix support
</div>

<div className="b-p-price">
<div className="price-1">
$39.96
</div>
<div className="price-2">
$49.96
</div>
<div className="price-3">
(20% off)
</div>
</div>

<button className='view'>View Deal</button>

</div>


</div>

    </div>
  )
}

export default Brand
