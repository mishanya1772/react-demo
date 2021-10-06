import component from './Navigation.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return <nav className={component.navigation}>
    <div className={component.item}>
      <NavLink to="/profile" activeClassName={component.active}>Profile</NavLink>
    </div>
    <div className={component.item}>
      <NavLink to="/message" activeClassName={component.active}>Message</NavLink>
    </div>
  </nav>;
};

export default Navigation;
