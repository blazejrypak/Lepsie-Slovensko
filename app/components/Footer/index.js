import React from 'react';
import moment from 'moment';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <div className="container">
        Made with ❤️ by Blažej Rypák
        <br/>
        <small>&copy; Copyright {moment() &&
        moment().format('YYYY')}, Blažej Rypák</small>
      </div>
    </footer>
  );
}

export default Footer;
