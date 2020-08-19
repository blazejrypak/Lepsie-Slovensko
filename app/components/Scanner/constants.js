/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const UPDATE_QR_RESULT = 'lepsie-slovensko-e_kasa/App/UPDATE_QR_RESULT';
export const LOAD_RECEIPT = 'lepsie-slovensko-e_kasa/App/LOAD_RECEIPT';
export const RECEIPT_LOADED = 'lepsie-slovensko-e_kasa/App/RECEIPT_LOADED';
export const LOAD_RECEIPT_ERROR = 'lepsie-slovensko-e_kasa/App/LOAD_RECEIPT_ERROR';
