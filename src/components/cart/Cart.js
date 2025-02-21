import React, { useState } from 'react';
import "./cartStyle.css";
import { useSelector } from 'react-redux';
import CartInformation from '../cartInformation/CartInformation';

function Cart() {

  const cartItems = useSelector(state=>state.cart.cart);
  const [isDisplay, setIsDisplay] = useState(false);

  const calcTotal = () =>{
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++){
      sum += cartItems[i].totalPrice;
    }
    return (
      <h2>Your total is: ${sum}</h2>
    );
  }

  const handlePay = () =>{
    setIsDisplay(true);
  }

  const closePopUp = (e) =>{
    setIsDisplay(false);
  }

  const popUp = () =>{
    return (
      <div className='popUpContainer' onClick={closePopUp}>
        <div className='popUp' onClick={e=>e.stopPropagation()}>
        <button onClick={closePopUp}>x</button>
          <h2>You've gone too far! <br/> the project was not meant to cover pay at this level! <br/> Take a little bit of time to appreciate this pop up thing though.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className='cartContainer'>
      {isDisplay && popUp()}
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
            <button onClick={handlePay}>Pay</button>
          </div>
      </div> 
    </div>
  )
}

export default Cart