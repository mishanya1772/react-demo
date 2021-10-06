import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return <header className="logo">
    <NavLink to='/'>
      <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg' alt='image'/>
    </NavLink>
  </header>;
};

export default Header;
