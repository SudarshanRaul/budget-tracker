import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { SAVE_TXN, UPDATE_TXN_LINE_INPUT } from "../types";
import { saveTransactionSaga } from "./saveTransactionSaga";
import { transactionAmountSaga } from "./transactionAmountSaga";

export function* appSaga() {
  yield takeLatest(UPDATE_TXN_LINE_INPUT, transactionAmountSaga);
  yield takeLatest(SAVE_TXN, saveTransactionSaga);
}
