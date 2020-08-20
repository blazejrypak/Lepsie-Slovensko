import React from 'react';
import PropTypes from 'prop-types';
import { Container, Table } from 'react-bootstrap';
import './index.css';
import { todayDate } from '../../utils/helpers';

// eslint-disable-next-line react/prefer-stateless-function
export default class ExpeditureCashReceiptForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ucelText: '',
      number2words: '',
    };
  }

  render() {
    let freeTaxAmountTotal = 0;
    let taxBaseBasicTotal = 0;
    let taxBaseReducedTotal = 0;
    let vatAmountReducedTotal = 0;
    let vatAmountBasicTotal = 0;
    let totalPrice = 0;
    if (this.props.listReceipts) {
      this.props.listReceipts.forEach(receipt => {
        freeTaxAmountTotal += receipt.freeTaxAmount;
        taxBaseBasicTotal += receipt.taxBaseBasic;
        taxBaseReducedTotal += receipt.taxBaseReduced;
        vatAmountReducedTotal += receipt.vatAmountReduced;
        vatAmountBasicTotal += receipt.vatAmountBasic;
        totalPrice += receipt.totalPrice;
      });
    }
    return (
      <Container style={{ padding: 20 }}>
        <Table bordered style={{ border: '5px solid' }}>
          <tbody>
            <tr style={{ border: '5px solid' }}>
              <td style={{ border: '5px solid' }}>
                <h3>Firma</h3>
                <input
                  style={{ border: '0px' }}
                  type="text"
                  value="EKOPERY, s.r.o."
                />
                <br />
                <p>Ulica Dolinka 926/4</p>
                <p>029 56 Zákamenné</p>
                <p>IČO: 36 383 040</p>
                <p>DIČ: 2020129276</p>
                <p>IČ-DPH: SK2020129276</p>
              </td>
              <td>
                <h3>Výdavkový</h3>
                <br />
                <h6>pokladničný doklad číslo ....................</h6>
                <p>zo dňa {todayDate()}</p>
              </td>
            </tr>
            <tr style={{ border: '5px solid' }}>
              <td colSpan="2">
                <p>Vyplatené komu </p>
                <p>
                  IČO
                  <input
                    style={{ border: '0px', width: 300 }}
                    type="text"
                    value=""
                    placeholder="................................................................................................."
                  />
                  DIČ/IČ DPH
                  <input
                    style={{ border: '0px', width: 300 }}
                    type="text"
                    value=""
                    placeholder="................................................................................................."
                  />
                </p>
                <Table id="rozdelenie_dph" bordered>
                  <tr>
                    <td>Suma v EUR bez DPH</td>
                    <td>DPH 20%</td>
                    <td>DPH 10%</td>
                    <td>Oslobodené</td>
                    <td>CELKOM K ÚHRADE EUR</td>
                  </tr>
                  <tr>
                    <td className="text-center">{taxBaseBasicTotal}</td>
                    <td className="text-center">{vatAmountBasicTotal}</td>
                    <td className="crossed" />
                    <td className="crossed" />
                    <td>{taxBaseBasicTotal + vatAmountBasicTotal}</td>
                  </tr>
                  <tr>
                    <td className="text-center">{taxBaseReducedTotal}</td>
                    <td className="crossed" />
                    <td>{vatAmountReducedTotal}</td>
                    <td className="crossed" />
                    <td>{taxBaseReducedTotal + vatAmountReducedTotal}</td>
                  </tr>
                  <tr>
                    <td className="text-center">{freeTaxAmountTotal}</td>
                    <td className="crossed" />
                    <td className="crossed" />
                    <td>0.00</td>
                    <td>{freeTaxAmountTotal}</td>
                  </tr>
                  <tr>
                    <td colSpan="4">
                      Spolu slovom:
                      <input
                        style={{ border: '0px', width: 900 }}
                        type="text"
                        value={this.state.number2words}
                        onChange={e =>
                          this.setState({ number2words: e.target.value })
                        }
                        placeholder="........................................................................................................................................................................................................."
                      />
                    </td>
                  </tr>
                </Table>
              </td>
            </tr>
            <tr>
              <td style={{ border: '5px solid' }}>
                <br />
                <p>
                  Účel{' '}
                  <input
                    style={{ border: '0px', width: 300 }}
                    type="text"
                    value={this.state.ucelText}
                    onChange={e => this.setState({ ucelText: e.target.value })}
                    placeholder="..........................................................................................................................................................."
                  />
                </p>
                <p>
                  Vyhotovil
                  ...........................................................
                </p>
                <p>
                  Schválil
                  ..............................................................
                </p>
                <p>
                  Podpis príjemcu
                  ................................................
                </p>
                <p>Zaúčtované v denníku pod por. č.: ...................</p>
              </td>
              <td>
                <Table>
                  <tbody>
                    <tr>
                      <h5>Účtovací predpis</h5>
                    </tr>
                    <tr>
                      <td>Má dať - účet</td>
                      <td>Suma</td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>Dátum {todayDate()}</td>
                      <td>Podpis</td>
                    </tr>
                  </tbody>
                </Table>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

ExpeditureCashReceiptForm.propTypes = {
  listReceipts: PropTypes.array,
};
