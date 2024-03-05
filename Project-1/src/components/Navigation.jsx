import React from 'react';
import Logo from '../../public/images/brand_logo.png';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='header-container'>
        <div className='logo'>
        <img src={Logo}/>
        </div>

        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>

        <button>Login</button>
      </nav>
  )
}

export default Navigation