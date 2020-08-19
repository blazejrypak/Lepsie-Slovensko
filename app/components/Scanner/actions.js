import { LOAD_RECEIPT, LOAD_RECEIPT_ERROR, RECEIPT_LOADED, UPDATE_QR_RESULT } from './constants';

export const loadReceipt = receipt_id => ({
  type: LOAD_RECEIPT,
  receipt_id,
});

export const updateScannerResult = text => ({
  type: UPDATE_QR_RESULT,
  text,
});

export const receiptLoaded = receipt => ({
  type: RECEIPT_LOADED,
  receipt,
});

export const receiptLoadingError = error => ({
  type: LOAD_RECEIPT_ERROR,
  error,
});
