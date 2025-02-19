import React from 'react'
import "./product.css";

function Product({id, name, price, url}) {
  return (
    <div className='productContainer'>
      <div className='productImgContainer'>
        <img src={url}/>
      </div>
      <div className='productTextContainer'>
        <h3>{name} | {price} | SONY</h3>
      </div>
      <div className='productBtn'>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}

export default Product