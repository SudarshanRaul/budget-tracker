import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { UPDATE_TXN_LINE_INPUT } from "../types";
import { transactionAmountSaga } from "./transactionAmountSaga";

export function* appSaga() {
  yield takeLatest(UPDATE_TXN_LINE_INPUT, transactionAmountSaga);
}
