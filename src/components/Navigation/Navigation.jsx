import component from './Navigation.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return <nav className={component.navigation}>
    <h3>
      <div className={component.item}>
        <NavLink to="/profile" activeClassName={component.active} data-id='profile'>Profile</NavLink>
      </div>
      <div className={component.item}>
        <NavLink to="/message" data-id='message' activeClassName={component.active}>Message</NavLink>
      </div>
    </h3>
  </nav>;
};

export default Navigation;
