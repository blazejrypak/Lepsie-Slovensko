/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { RECEIPT_LOADED, UPDATE_QR_RESULT } from './constants';

// The initial state of the App
export const initialState = {
  qr_result: '',
  listReceipts: [
  ],
};

/* eslint-disable default-case, no-param-reassign */
const scannerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_QR_RESULT:
        draft.qr_result = action.text;
        break;
      case RECEIPT_LOADED:
        // eslint-disable-next-line no-case-declarations
        const result = draft.listReceipts.find(
          r => r.receiptId === draft.qr_result,
        );
        if (!result) {
          const { receipt } = action;
          Object.keys(receipt).forEach(function(key) {
            if (receipt[key] === null) {
              receipt[key] = 0;
            }
          });
          draft.listReceipts.push(action.receipt);
        }
        console.log('length', draft.listReceipts.length);
        break;
    }
  });

export default scannerReducer;
