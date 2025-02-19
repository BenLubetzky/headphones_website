import React from 'react';
import "./cartStyle.css";
import { useSelector } from 'react-redux';
import CartInformation from '../cartInformation/CartInformation';

function Cart() {

  const cartItems = useSelector(state=>state.cart.cart);

  return (
    <div className='cartContainer'>
      <div className='cartInformation'>
        <h2>Let's See What You Have In Your Cart ...</h2>
        <div className='cartItems'>
          {cartItems.map(item=>(
            <CartInformation key={item.id} name={item.name} id={item.id} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice}/>
          ))}
        </div>
      </div>
      <div className='cartPay'>

      </div>
    </div>
  )
}

export default Cart