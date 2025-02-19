import React from 'react'
import "./cartInformation.css";
import { cartActions } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

function CartInformation({name, id, price, quantity, totalPrice}) {

  const dispatch = useDispatch();

  const addItem = () =>{
    dispatch(cartActions.addToCart({name: name, id:id, quantity: quantity, price:price, totalPrice:totalPrice}));
  }
  const removeItem = () =>{
    dispatch(cartActions.removeFromCart(id));
  }

  return (
    <div className='cartInformationContainer'>
      <h2>{name} | ${price} | Amount: {quantity} | Total: ${totalPrice}</h2>
      <div className='cartButtons'>
        <button onClick={addItem}>+</button>
        <button onClick={removeItem}>-</button>
      </div>
    </div>
  );
};

export default CartInformation;