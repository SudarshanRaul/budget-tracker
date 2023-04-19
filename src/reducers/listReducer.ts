import {
  ActionType,
  StateType,
  TransactionListStateType,
  TransactionProperties,
  UPDATE_LIST,
  VALIDATE_TXN,
  ValidationMsgType,
  ValidationStateType,
} from "../types";

const initialTransactionListState: [TransactionListStateType] | [] = [];

export function transactionListReducer(
  state: [TransactionListStateType] | [] = initialTransactionListState,
  action: ActionType
) {
  switch (action.type) {
    case UPDATE_LIST:
      return action.list;
    default:
      return state;
  }
}

export function getTransactionList(state: StateType) {
  return state?.transactionList;
}
