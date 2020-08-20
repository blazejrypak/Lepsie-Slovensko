import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import './index.css';

function ReceiptDetails(props) {
  return (
    <Container>
      <Card
        style={{
          border: 'none',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>
            Receipt of Payment
          </Card.Title>
          <h4 className="text-center">{props.receipt.organization.name}</h4>
          <Row>
            <Col md={4} style={{ textAlign: 'left' }} />
            <Col md={8} style={{ textAlign: 'right' }}>
              <h5>Invoice: #{props.receiptIndex}</h5>
              <p className="text-muted"> Due to: {props.receipt.createDate}</p>
            </Col>
          </Row>
          <Row>
            <div className="table-responsive">
              <Table hover size="sm">
                <thead>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </thead>
                <tbody>
                  {props.receipt.items.map(item => (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Row>
          <Row
            style={{
              boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
              paddingTop: 20,
              paddingBottom: 10,
            }}
          >
            <Table hover size="sm">
              <thead>
                <th>Sadzba</th>
                <th>Zaklad</th>
                <th>DPH</th>
              </thead>
              <tbody>
                <tr>
                  <td>A Oslobodene</td>
                  <td>{props.receipt.freeTaxAmount.toFixed(2)}</td>
                  <td>0,00</td>
                </tr>
                <tr>
                  <td>B {props.receipt.vatRateReduced}%</td>
                  <td>{props.receipt.taxBaseReduced.toFixed(2)}</td>
                  <td>{props.receipt.vatAmountReduced.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>C {props.receipt.vatRateBasic}%</td>
                  <td>{props.receipt.taxBaseBasic.toFixed(2)}</td>
                  <td>{props.receipt.vatAmountBasic.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Spolu</td>
                  <td>
                    {(
                      props.receipt.freeTaxAmount +
                      props.receipt.taxBaseReduced +
                      props.receipt.taxBaseBasic
                    ).toFixed(2)}
                  </td>
                  <td>
                    {(
                      props.receipt.vatAmountReduced +
                      props.receipt.vatAmountBasic
                    ).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ReceiptDetails;
