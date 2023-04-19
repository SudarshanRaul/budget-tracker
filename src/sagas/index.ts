import { call, put, takeEvery, takeLatest, delay } from "redux-saga/effects";
import { FETCH_TXN_LIST, SAVE_TXN, UPDATE_TXN_LINE_INPUT } from "../types";
import { fetchTransactionList } from "./fetchTransactionListSaga";
import { saveTransactionSaga } from "./saveTransactionSaga";
import { transactionAmountSaga } from "./transactionAmountSaga";

export function* appSaga() {
  yield takeLatest(UPDATE_TXN_LINE_INPUT, transactionAmountSaga);
  yield takeLatest(SAVE_TXN, saveTransactionSaga);
  yield takeLatest(FETCH_TXN_LIST, fetchTransactionList);
}
