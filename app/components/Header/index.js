import React from 'react';

function Header() {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h3 style={{ color: 'white', fontSize: 32 }}>
                  Naskenuj pokladničné bločky a nechaj si vygenerovať tlačivo
                </h3>
                <br/>
                <a className="example_f" href="/features"><span>Začni skenovať</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
