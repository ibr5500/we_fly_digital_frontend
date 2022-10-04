import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../logo.png';

function NavigationPanel() {
  const [NavIsActive, toggleActiveNav] = useState(false);
  const isActive = true;

  const handleSignOut = () => {
    sessionStorage.removeItem('loginToken');
  };

  return (
    <>
      <aside className={NavIsActive ? 'nav-panel hidden' : 'nav-panel'}>
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => {
            toggleActiveNav(!NavIsActive);
          }}
        >
          {NavIsActive ? (
            <i className="fa-solid fa-x" />
          ) : (
            <i className="fa-sharp fa-solid fa-bars" />
          )}
        </button>

        <div className="header__logo">
          <Link to="/">
            {' '}
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul className="panel-links">
          <li className={isActive ? 'active-link' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive ? 'active-link' : ''}>
            <Link onClick={() => toggleActiveNav(!NavIsActive)} to="/reserve">Add Flight</Link>
          </li>
          <li className={isActive ? 'active-link' : ''}>
            <Link onClick={() => toggleActiveNav(!NavIsActive)} to="/cancelled">Cancelled Flight</Link>
          </li>

          <li className={isActive ? 'active-link' : ''}>
            {' '}
            <Link onClick={() => toggleActiveNav(!NavIsActive)} to="/reserved">Reservations</Link>
          </li>

          <li className={isActive ? 'active-link' : ''}>
            {' '}
            <Link onClick={handleSignOut} to="/login">SignOut</Link>
          </li>
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
          </li>
          <li>
            <span>
              <i className="fa-brands fa-whatsapp" />
            </span>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default NavigationPanel;
