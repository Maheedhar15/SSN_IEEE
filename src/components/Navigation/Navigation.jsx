import React from 'react';
import { NavLink } from 'react-router-dom';
import IEEE from '../../assets/IEEE.png';
import SSN from '../../assets/ssn_logo_blue_transparent.png';
import { BiUserCircle } from 'react-icons/bi';
import './navigation.css';

function Navigation() {
  return (
    <div>
      <div className="navbar">
        <NavLink to="/">
          <div className="images">
            <img src={IEEE} alt="IEEE" className="brand-img" />
            <img src={SSN} alt="SSN" className="brand-img-ssn" />
          </div>
        </NavLink>
        <div className="links">
          <NavLink to="/events">
            <h2 className="Linktext">Events</h2>
          </NavLink>
        </div>
        <div className="navbar__profile">
          <BiUserCircle className="profile__icon" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
