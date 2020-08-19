import React from 'react';

function Navigation(props) {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
      <a
        className="navbar-brand"
        href="/"
      >
        Lepšie Slovensko
      </a>
      <button
        className="navbar-toggler mr-left custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav navbar-nav navbar-primary w-100 ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/app">
              <span>App</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              <span>About</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="mailto: hola@getmove.net">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
