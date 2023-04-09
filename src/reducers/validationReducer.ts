import {
  ActionType,
  StateType,
  TransactionProperties,
  VALIDATE_TXN,
  ValidationMsgType,
  ValidationStateType,
} from "../types";

const initialValidationState: ValidationStateType = {
  message: {
    [TransactionProperties.DATE]: "",
    [TransactionProperties.SUMMARY]: "",
    [TransactionProperties.PAYMENT_METHOD]: "",
    [TransactionProperties.LINE]: "",
    [TransactionProperties.AMOUNT]: "",
    [TransactionProperties.DESCRIPTION]: "",
    [TransactionProperties.PAYMENT_REFERENCE]: "",
  },
  isValid: true,
};

export function validationReducer(
  state: ValidationStateType = initialValidationState,
  action: ActionType
) {
  switch (action.type) {
    case VALIDATE_TXN:
      return action.validationObj;
    default:
      return {
        ...state,
      };
  }
}

export function getValidationState(state: StateType) {
  return state?.validation;
}
