/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { receiptLoaded, receiptLoadingError } from './actions';
import { LOAD_RECEIPT } from './constants';

const axios = require('axios');

export const getReceiptId = state => state.scanner.qr_result;

/**
 * Github repos request/response handler
 */
export function* getReceipt() {
  // Select username from store
  // yield put(actions.authStart());
  const receipt_id = yield select(getReceiptId);

  const requestURL =
    'https://ekasa.financnasprava.sk/mdu/api/v1/opd/receipt/find';

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(() =>
      axios.post(requestURL, { receiptId: receipt_id }),
    );
    yield put(receiptLoaded(response.data.receipt));
  } catch (err) {
    yield put(receiptLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* ekasaData() {
  yield takeLatest(LOAD_RECEIPT, getReceipt);
}
