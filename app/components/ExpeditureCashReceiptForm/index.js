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
                <form
                  data-slovensko-digital-autoform-filter="active"
                  data-slovensko-digital-autoform="6d1d9ca81658ad940472c176faf52fcbb1a43fcaf94393c13dc73ead7cc91df6f706919d39c30e5c"
                  action="..."
                >
                  <p> Názov: {' '}
                    <input
                      type="text"
                      name="name"
                      data-slovensko-digital-autoform="name"
                    />
                  </p>
                  <br />
                  <p> Adresa: {' '}
                    <textarea
                      style={{ border: '0px', width: '80%' }}
                      type="text"
                      name="formatted_address"
                      data-slovensko-digital-autoform="formatted-address"
                    />
                  </p>
                  <p> IČO: {' '}
                    <input
                      style={{ border: '0px' }}
                      type="text"
                      name="cin"
                      data-slovensko-digital-autoform="cin"
                    />
                  </p>
                  <p> DIČ: {' '}
                    <input
                      style={{ border: '0px' }}
                      type="text"
                      name="tin"
                      data-slovensko-digital-autoform="tin"
                    />
                  </p>
                  <p> IČ/DPH: {' '}
                    <input
                      style={{ border: '0px' }}
                      type="text"
                      name="vatin"
                      data-slovensko-digital-autoform="vatin"
                    />
                  </p>
                </form>
              </td>
              <td>
                <h3>{this.props.docType}</h3>
                <br />
                <h6>pokladničný doklad číslo ....................</h6>
                <p>zo dňa {todayDate()}</p>
              </td>
            </tr>
            <tr style={{ border: '5px solid' }}>
              <td colSpan="2">
                <p>Vyplatené komu </p>
                <p>
                  IČO {'   '}
                  <input
                    style={{ border: '0px', width: 300 }}
                    type="text"
                    placeholder="................................................................................................."
                  />
                  DIČ/IČ DPH {'  '}
                  <input
                    style={{ border: '0px', width: 300 }}
                    type="text"
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
                    <td className="text-center">{taxBaseBasicTotal.toFixed(2)}</td>
                    <td className="text-center">{vatAmountBasicTotal.toFixed(2)}</td>
                    <td className="crossed" />
                    <td className="crossed" />
                    <td>{(taxBaseBasicTotal + vatAmountBasicTotal).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="text-center">{taxBaseReducedTotal.toFixed()}</td>
                    <td className="crossed" />
                    <td>{vatAmountReducedTotal.toFixed()}</td>
                    <td className="crossed" />
                    <td>{(taxBaseReducedTotal + vatAmountReducedTotal).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="text-center">{freeTaxAmountTotal.toFixed(2)}</td>
                    <td className="crossed" />
                    <td className="crossed" />
                    <td>0.00</td>
                    <td>{freeTaxAmountTotal.toFixed(2)}</td>
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
                      <td colSpan={2}>Suma</td>
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
                      <td colSpan={3}><pre className="tab">Dátum: {todayDate()}           Podpis:</pre></td>
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
  docType: PropTypes.string,
};
