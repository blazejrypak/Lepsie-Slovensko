/**
 * Scanner selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectScanner = state => state.scanner.qr_result || initialState;

const makeSelectScannerResult = () =>
  createSelector(
    selectScanner,
    scannerState => scannerState.qr_result,
  );

export { selectScanner, makeSelectScannerResult };
