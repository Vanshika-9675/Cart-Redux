import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const items = useSelector(state => state.cart);

  return (
    <div className='navbar'>
      <span className='logo'>ONLINE STORE</span>
      <div>
        <NavLink exact className='navLink' activeClassName='active' to='/'>Home</NavLink>
        <NavLink className='navLink cartCount' activeClassName='active' to='/cart'>Cart: {items.length}</NavLink>
      </div>
    </div>
  );
}

export default Navbar;