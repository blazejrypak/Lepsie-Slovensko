import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import QrReader from 'react-qr-reader';
import { loadReceipt, updateScannerResult } from './actions';
import saga from './saga';
import { useInjectSaga } from '../../utils/injectSaga';
import 'bootstrap/dist/css/bootstrap.css';
import ReceiptDetails from '../ReceiptDetails';
import ExpeditureCashReceiptForm from '../ExpeditureCashReceiptForm';
import { useReactToPrint } from 'react-to-print';

const key = 'Scanner';

export function Scanner(props) {
  useInjectSaga({ key, saga });
  const handleError = err => {
    console.error(err);
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const handleScan = data => {
    if (data) {
      props.updateScannerResult(data);
      props.loadReceipt();
      if (index > 0) {
        setIndex(props.listReceipts.length - 1);
      }
    }
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
        </Col>
        <Col md={6} style={{ backgroundColor: '#2d2d2d' }}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{ padding: 50 }}
          >
            {props.listReceipts.map((r, i) => (
              <Carousel.Item key={r.toString()}>
                <ReceiptDetails
                  key={r.toString()}
                  receipt={r}
                  receiptIndex={i + 1}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row>
        <ExpeditureCashReceiptForm
          ref={componentRef}
          listReceipts={props.listReceipts}
        />
      </Row>
      <div className="text-center" style={{ padding: 20 }}>
        <Button variant="success" onClick={handlePrint}>
          Vytlačiť doklad
        </Button>
      </div>
    </Container>
  );
}

Scanner.propTypes = {
  listReceipts: PropTypes.array,
  qr_result: PropTypes.string,
  updateScannerResult: PropTypes.func.isRequired,
  loadReceipt: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  qr_result: state.scanner.qr_result,
  listReceipts: state.scanner.listReceipts,
});

const mapDispatchToProps = dispatch => ({
  updateScannerResult: text => dispatch(updateScannerResult(text)),
  loadReceipt: () => dispatch(loadReceipt()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Scanner);
