import React from 'react';
import { todayYear } from '../../utils/helpers';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <div className="container">
        Made with ❤️ by Blažej Rypák
        <br />
        <small>&copy; Copyright {todayYear()} | All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
