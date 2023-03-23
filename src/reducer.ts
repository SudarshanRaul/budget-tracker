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
} from "./types";

export function transactionReducer(
  state: TransactionStateType,
  action: ActionType
) {
  switch (action.type) {
    case UPDATE_TXN_INPUT:
      return {
        ...state,
        ...action.updatedState,
      };
    case UPDATE_TXN_LINE_INPUT:
      return {
        ...state,
        lineItems: [...state.lineItems, action.newLineItem],
      };

    default:
      return {
        ...state,
      };
  }
}

export function getTransaction(state: StateType) {
  return (
    txnProp: Exclude<TransactionProperties, TransactionProperties.LINE>
  ) => state?.transaction[txnProp];
}

export function getLineItemValue(state: StateType) {
  return (index: number, prop: LineItemProperties) =>
    state?.transaction.lineItems[index][prop];
}
