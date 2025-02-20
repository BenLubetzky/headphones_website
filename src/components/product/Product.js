import React from 'react'
import "./product.css";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

function Product({id, name, price, url}) {

  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(cartActions.addToCart({name: name, price: price, id:id, }));
  }

  return (
    <div className='productContainer'>
      <div className='productImgContainer'>
        <img src={url}/>
      </div>
      <div className='productTextContainer'>
        <h3>{name} | ${price} | SONY</h3>
      </div>
      <div className='productBtn'>
        <button onClick={addToCart}>Add To Cart</button>
      </div>
    </div>
  )
}

export default Product