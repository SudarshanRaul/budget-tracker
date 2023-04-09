import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getLineItemAmount,
  getTransaction,
} from "../reducers/transactionReducer";
import {
  ActionType,
  LineItemStateType,
  TransactionProperties,
  updateTxnInput,
} from "../types";

export function* transactionAmountSaga(action: ActionType) {
  const lineItemsAmount = (yield select(getLineItemAmount) as unknown) as [
    string
  ];
  const filteredLineItemsAmount = lineItemsAmount.filter(
    (amount) => amount !== ""
  );
  const totalAmount = filteredLineItemsAmount.reduce((prevTotal, amount) => {
    return prevTotal + parseFloat(amount);
  }, 0);
  yield put(
    updateTxnInput({
      [TransactionProperties.AMOUNT]: `${totalAmount}`,
    })
  );
}
