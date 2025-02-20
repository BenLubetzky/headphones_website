import React from 'react';
import "./cartStyle.css";
import { useSelector } from 'react-redux';
import CartInformation from '../cartInformation/CartInformation';

function Cart() {

  const cartItems = useSelector(state=>state.cart.cart);

  const calcTotal = () =>{
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++){
      sum += cartItems[i].totalPrice;
    }
    return (
      <h2>Your total is: ${sum}</h2>
    );
  }

  return (
    <div className='cartContainer'>
      <div className='cartInformation'>
        <div className='cartItems'>
          {(cartItems.length > 0) ? cartItems.map(item=>(
            <CartInformation key={item.id} name={item.name} id={item.id} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice}/>
          )) : <h2>Seems like your cart is empty ...</h2>}
        </div>
      </div>
      <div className='cartPay'>
          <h2>Checkout ?</h2>
          {calcTotal()}
          <div className='btnPay'>
            <button>Pay</button>
          </div>
      </div> 
    </div>
  )
}

export default Cart