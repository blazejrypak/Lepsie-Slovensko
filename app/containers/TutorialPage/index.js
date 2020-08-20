import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './index.css';
import Avatar from '../AboutPage/avatar.jpg';

function TutorialPage() {
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
        <meta
          name="description"
          content="Blažej Rypák, react developer | FIIT STU, rypak.b@gmail.com"
        />
      </Helmet>
      <Container fluid style={{ height: '400px' }}>
        <br />
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
                {/*<Image src={Avatar} alt="avatar" roundedCircle responsive />*/}
              </Col>
              <Col md={7} >
                {/*<p>1. Rozdel si blocky na 2 skupiny podla sposobu platby(kartou alebo hotovostou)</p>*/}
                {/*<p>2. Oskenuj vsetky blocky, jeden za druhym</p>*/}
                {/*<p>3. Vyber druh dokladu podla sposobu platby</p>*/}
                {/*<p>4. Vypln nazov firmy</p>*/}
                {/*<p>5. Nakoniec mozes dat tlacit doklad</p>*/}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default TutorialPage;
