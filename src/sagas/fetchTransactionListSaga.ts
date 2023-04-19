import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
  delay,
} from "redux-saga/effects";
import { fetchAllRecord } from "../db";
import {
  getLineItemAmount,
  getTransaction,
} from "../reducers/transactionReducer";
import {
  ActionType,
  LineItemStateType,
  TransactionProperties,
  TransactionListResponseType,
  updateList,
  updateTxnInput,
} from "../types";

export function* fetchTransactionList(action: ActionType) {
  try {
    yield delay(200);
    const responseList = (yield call(fetchAllRecord) as unknown) as [
      TransactionListResponseType
    ];
    const list = responseList.map((txn) => ({
      [TransactionProperties.DATE]: txn[TransactionProperties.DATE],
      [TransactionProperties.SUMMARY]: txn[TransactionProperties.SUMMARY],
      [TransactionProperties.DESCRIPTION]:
        txn[TransactionProperties.DESCRIPTION],
      [TransactionProperties.AMOUNT]: txn[TransactionProperties.AMOUNT],
      [TransactionProperties.PAYMENT_METHOD]:
        txn[TransactionProperties.PAYMENT_METHOD],
      [TransactionProperties.PAYMENT_REFERENCE]:
        txn[TransactionProperties.PAYMENT_REFERENCE],
      id: txn.id,
    }));
    yield put(updateList(list));
  } catch (error) {
    console.log(error);
  }
}
