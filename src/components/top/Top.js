import React from 'react'
import './Top.css';
import { NavLink } from 'react-router-dom';

function Top() {
  return (
    <div className='topContainer'>
        <h2>B A S S</h2>
        <ul className='navigation'>
            <NavLink className="navLink" to="cart">Cart</NavLink>
            <NavLink className="navLink" to="homepage">Home Page</NavLink>
            <NavLink className="navLink" to="login">Login</NavLink>

        </ul>
    </div>
  )
}

export default Top