import React from 'react'
import './Product.css'
import { CiTrophy } from "react-icons/ci";
import image from '../assets/download 1.png'
import rating from '../assets/IMAGE (2).png'
import { IoIosArrowDown } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";

const Product = () => {
  return (
    <div className='product'> 


    <div className="product-main">

      <div className="best"> <span><CiTrophy color='white'/> Best Choice</span>

      </div>

 

      <div className="product-detail">
      <div className="product-count">1</div>

      <div className="product-img">
    <img src={image} alt="" />
    <div className='product-name'>Builder</div>
</div>


<div className="product-details">
    <div className="product-detail-para-1">
  <span>WixPro 72-Inch Responsive Website Builder </span>   - Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue) <span>Main Highlights</span>
    </div>
    <div className="product-detail-para-2">
    [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
    </div>
    <div className="show">Show <IoIosArrowDown color='#1B88F4'/></div>
</div>

<div className="product-right">

    <div className="product-rating">
        <div className="number">9.8</div>
        <div className="rating-des">Exceptional</div>
        <div className="rating-img">
            <img src={rating} alt="" />
        </div>
    </div>

    <button className='view'>View</button>
</div>

</div>


</div>


{/* 2 */}

<div className="product-main">

<div className="best"> <span><CiTrophy color='white'/> Best Value</span>

</div>



<div className="product-detail">
<div className="product-count">2</div>

<div className="product-img">
<img src={image} alt="" />
<div className='product-name'>Builder</div>
</div>


<div className="product-details">
<div className="product-detail-para-1">
<span>WixPro 72-Inch Responsive Website Builder </span>   - Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue) <span>Main Highlights</span>
</div>
<div className="product-detail-para-2">
[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
</div>
<div className="show">Show <IoIosArrowDown color='#1B88F4'/></div>
</div>

<div className="product-right">

<div className="product-rating">
  <div className="number">9.5</div>
  <div className="rating-des">Excelent</div>
  <div className="rating-img">
      <img src={rating} alt="" />
  </div>
</div>

<button className='view'>View</button>
</div>

</div>


</div>


{/* 3 */}



<div className="product-main">

<div className="product-detail">
<div className="product-count">3</div>

<div className="product-img">
<img src={image} alt="" />
<div className='product-name'>Builder</div>
</div>


<div className="product-details">
<div className="product-detail-para-1">
<span>WixPro 72-Inch Responsive Website Builder </span>   - Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue) <span>Main Highlights</span>
</div>
<div className="product-detail-para-2">
[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
</div>
<div className="show">Show <IoIosArrowDown color='#1B88F4'/></div>
</div>

<div className="product-right">

<div className="product-rating">
  <div className="number">9.3</div>
  <div className="rating-des">Exceptional</div>
  <div className="rating-img">
      <img src={rating} alt="" />
  </div>
</div>

<button className='view'>View</button>
</div>
</div>
</div>

{/* 4 */}


<div className="product-main">

<div className="product-detail">
<div className="product-count">4</div>

<div className="product-img">
<img src={image} alt="" />
<div className='product-name'>CDK</div>
</div>


<div className="product-details">
<div className="product-detail-para-1">
<span> CDK Resposive Builder: </span> An extensive library of widgets and apps, and detailed step-by-step guides
</div>
<div className="product-detail-para-22">
<span>Main highlights</span>
<div className="product-detail-para-2-box">

    <div className="line-1">
        <div className="box">9.9</div> <div className='box-text'>Building Responses</div>
        </div>
        <div className="line-1">
        <div className="box">8.9</div> <div className='box-text'>Cool</div>
        </div>
        <div className="line-1">
        <div className="box">8.9</div> <div className='box-text'>Docs</div>
        </div>

</div>
</div>
<div className="product-detail-para-3">
    <div className="para-3-1">Why we love it?</div>
    <div className="para-3-list">
        <ul>
            <li><CiCircleCheck/>Documentation</li>
            <li><CiCircleCheck/>Easy Use</li>
            <li><CiCircleCheck/>Out of box</li>
        </ul>
    </div>
</div>
<div className="show">Show <IoIosArrowDown color='#1B88F4'/></div>
</div>

<div className="product-right">

<div className="product-rating">
  <div className="number">9.1</div>
  <div className="rating-des">Very Good</div>
  <div className="rating-img">
      <img src={rating} alt="" />
  </div>
</div>

<button className='view'>View</button>
</div>
</div>
</div>

    </div>
  )
}

export default Product
