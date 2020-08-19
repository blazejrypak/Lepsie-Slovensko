import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './index.css';
import Avatar from './avatar.jpg';

function AboutPage() {
  return (
    <div
      role="main"
      className="container-fluid"
      style={{
        backgroundImage:
          'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
      }}
    >
      <Helmet>
        <title>About</title>
        <meta name="description" content="About me"/>
      </Helmet>
      <Container fluid style={{ height: '400px' }}>
        <br/>
        <Card
          style={{
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            marginLeft: '15%',
            marginRight: '15%',
            // marginTop: '5%',
            paddingBottom: '3%',
          }}
        >
          <Card.Body>
            <Row>
              <Col md={5}>
                <Image src={Avatar} alt="avatar" roundedCircle responsive/>
              </Col>
              <Col md={7}>
                <div className="info_me">
                  <h6>Hello everybody, I am</h6>
                  <h3>Blazej Rypak</h3>
                  <h4>WEB</h4>
                  <br/>
                  <p>
                    You will begin to realise why this exercise is called the
                    Dickens Pattern (with reference to the ghost showing Scrooge
                    some different futures)
                  </p>
                  <ul className="list basic_info">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faPhoneAlt} size="2x"/> + 421
                        948 077 815
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faEnvelope} size="2x"/>{' '}
                        rypak.b@gmail.com
                      </a>
                    </li>
                  </ul>
                  <ul className="media_info list-group list-group-horizontal">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <br/>
        <br/>
        <br/>
      </Container>
    </div>
  );
}

export default AboutPage;
