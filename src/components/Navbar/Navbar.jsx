import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='heading'>ReactMeals</div>
        <div className='cart-section'>
            <img className='cart-image' src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?w=740&t=st=1695187640~exp=1695188240~hmac=4f089eac3e176269cf47e0148d29f68e4daf3b287a6f165a9063b2183062ee4f" alt="" />
            <p>Your Cart</p>
            <span className='cart-count'>0</span>
        </div>
    </div>
  )
}

export default Navbar