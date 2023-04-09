import {
  call,
  put,
  select,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { addRecord } from "../db";
import {
  getLineItemAmount,
  getTransaction,
  getTransactionState,
} from "../reducers/transactionReducer";
import { getValidationState } from "../reducers/validationReducer";
import {
  ActionType,
  LineItemStateType,
  TransactionProperties,
  TransactionStateType,
  updateTxnInput,
  validateTxn,
  VALIDATE_TXN,
  ValidationMessage,
  ValidationMsgType,
  ValidationStateType,
} from "../types";

function* validateTransaction() {
  const transaction = (yield select(
    getTransactionState
  ) as unknown) as TransactionStateType;
  const {
    [TransactionProperties.DATE]: txnDate,
    [TransactionProperties.SUMMARY]: txnSummary,
    [TransactionProperties.PAYMENT_METHOD]: txnPaymentMethod,
    [TransactionProperties.LINE]: txnLine,
  } = transaction;
  const currentValidationState = (yield select(
    getValidationState
  ) as unknown) as ValidationStateType;
  const validationMessage = {
    ...currentValidationState.message,
    [TransactionProperties.DATE]:
      txnDate === "" ? ValidationMessage.TXN_DATE : "",
    [TransactionProperties.SUMMARY]:
      txnSummary === "" ? ValidationMessage.TXN_SUMMARY : "",
    [TransactionProperties.PAYMENT_METHOD]:
      txnPaymentMethod === "" ? ValidationMessage.TXN_PAYMENT_METHOD : "",
    [TransactionProperties.LINE]:
      txnLine.length === 1 ? ValidationMessage.TXN_LINE : "",
  };
  const isTxnInvalid = Object.values(validationMessage).some(
    (message) => message !== ""
  );
  const nextValidationState: ValidationStateType = {
    message: validationMessage,
    isValid: !isTxnInvalid,
  };
  yield put(validateTxn(nextValidationState));
  return { isValid: !isTxnInvalid };
}

export function* saveTransactionSaga(action: ActionType) {
  const { isValid } = yield call(validateTransaction);
  if (isValid) {
    const transaction = (yield select(
      getTransactionState
    ) as unknown) as TransactionStateType;
    console.log(transaction);
    addRecord(transaction);
  }
}
