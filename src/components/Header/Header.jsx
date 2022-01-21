import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return <header className="logo">
    <NavLink to='/'>
      <img src='https://e1.pngegg.com/pngimages/298/527/png-clipart-snoopy.png' alt='image'/>
    </NavLink>
  </header>;
};

export default Header;
