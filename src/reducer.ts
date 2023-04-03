import {
  TransactionStateType,
  ActionType,
  UPDATE_TXN_INPUT,
  StateType,
  TransactionProperties,
  DefaultTransactionValueForCalculation,
  UPDATE_TXN_LINE_INPUT,
  LineItemStateType,
  LineItemProperties,
  ADD_TXN_LINES,
} from "./types";
import { calculateLineAmount, calculatorUtil } from "./utils/calculateAmount";

const initialLineItemsState: LineItemStateType = {
  [LineItemProperties.CATEGORY]: "",
  [LineItemProperties.PRODUCT_AND_SERVICES]: "",
  [LineItemProperties.AMOUNT]: "",
  [LineItemProperties.RATE]: "",
  [LineItemProperties.QUANTITY]: "",
  [LineItemProperties.DESCRIPTION]: "",
};

const initialTransactionState: TransactionStateType = {
  [TransactionProperties.DATE]: "",
  [TransactionProperties.SUMMARY]: "",
  [TransactionProperties.DESCRIPTION]: "",
  [TransactionProperties.AMOUNT]: "0.0",
  [TransactionProperties.PAYMENT_METHOD]: "",
  [TransactionProperties.PAYMENT_REFERENCE]: "",
  [TransactionProperties.LINE]: [initialLineItemsState],
};

export function transactionReducer(
  state: TransactionStateType = initialTransactionState,
  action: ActionType
) {
  switch (action.type) {
    case UPDATE_TXN_INPUT:
      return {
        ...state,
        ...action.updatedState,
      };
    case UPDATE_TXN_LINE_INPUT:
      const lineItemState = [...state[TransactionProperties.LINE]];
      lineItemState[action.lineIndex] = {
        ...lineItemState[action.lineIndex],
        ...calculatorUtil(action.newLineItem, lineItemState[action.lineIndex]),
      };
      action.lineIndex + 1 === lineItemState.length &&
        lineItemState.push(initialLineItemsState);
      return {
        ...state,
        [TransactionProperties.LINE]: lineItemState,
      };
    default:
      return {
        ...state,
      };
  }
}

export function getTransaction(state: StateType) {
  return (txnProp: TransactionProperties) => state?.transaction[txnProp];
}

export function getLineItemValue(state: StateType) {
  return (index: number, prop: LineItemProperties) =>
    state?.transaction[TransactionProperties.LINE][index][prop];
}

export function getLineItemAmount(state: StateType) {
  return state?.transaction[TransactionProperties.LINE].map(
    ({ amount }) => amount
  );
}
