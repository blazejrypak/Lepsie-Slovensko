import React from 'react';

function Header() {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h3
                  style={{ color: 'white', fontWeight: 'normal', fontSize: 30 }}
                >
                  Naskenuj QR kódy bločkov a nechaj si vygenerovať <br />
                  <span
                    style={{
                      color: '#ff9400',
                      fontWeight: 'bolder',
                      fontSize: 30,
                    }}
                  >
                    výdavkový pokladničný doklad
                  </span>
                </h3>
                <br />
                <a className="example_f" href="/app">
                  <span>Začni skenovať</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
