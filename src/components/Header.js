import React from 'react';
import Tab from './Tab';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="tabs">
      <Tab>
        <NavLink exact activeClassName="is-active" to="/">
          Home
        </NavLink>
      </Tab>
      <Tab>
        <NavLink activeClassName="is-active" to="/about">
          About
        </NavLink>
      </Tab>
      <Tab>
        <NavLink activeClassName="is-active" to="/features">
          Features
        </NavLink>
      </Tab>
    </div>
  );
}
