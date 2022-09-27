import React from 'react';
import logo from '../logo.png';

function NavigationPanel() {
  return (
    <div className="nav-panel">
      <div className="header__logo">
        <a href="#valid">
          {' '}
          <img src={logo} alt="logo" />
        </a>
      </div>
      {/* <h1 className="">𝓕𝓵𝔂 𝓔𝓿𝓮𝓻𝔂𝔀𝓱𝓮𝓻𝓮</h1> */}
      <ul className="panel-links">
        <li>Home</li>
        <li>Add Flight</li>
        <li>Bookings</li>
        <li>Reservations </li>
        <li>Delete Flight</li>
        <li>Sign Out</li>
      </ul>
      <ul className="social-links">

        <li>
          <span>
            <i className="fa-brands fa-linkedin-in" />
          </span>
        </li>
        <li>
          <span>
            <i className="fa-brands fa-facebook" />
          </span>
        </li>
        <li>
          <span>
            <i className="fa-brands fa-twitter" />
          </span>
          {' '}
        </li>
        <li>
          <span>
            <i className="fa-brands fa-whatsapp" />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default NavigationPanel;
