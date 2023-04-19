import { type } from "os";

export enum TransactionProperties {
  DATE = "txnDate",
  SUMMARY = "txnSummary",
  DESCRIPTION = "txnDescription",
  AMOUNT = "txnAmount",
  PAYMENT_METHOD = "paymentMethod",
  PAYMENT_REFERENCE = "paymentRef",
  LINE = "lineItems",
}

export enum LineItemProperties {
  CATEGORY = "category",
  PRODUCT_AND_SERVICES = "productAndService",
  DESCRIPTION = "description",
  AMOUNT = "amount",
  RATE = "rate",
  QUANTITY = "quantity",
}

export enum DefaultTransactionValueForCalculation {
  RATE = "1",
  QUANTITY = "1",
  AMOUNT = "0",
}

export interface TransactionInputType {
  type?: string;
  label: string;
}

export const LineItemInputs: Record<LineItemProperties, TransactionInputType> =
  {
    [LineItemProperties.PRODUCT_AND_SERVICES]: {
      type: "dropDown",
      label: "Item",
    },
    [LineItemProperties.CATEGORY]: {
      type: "dropDown",
      label: "Category",
    },
    [LineItemProperties.DESCRIPTION]: {
      type: "text",
      label: "Description",
    },
    [LineItemProperties.RATE]: {
      type: "number",
      label: "Rate",
    },
    [LineItemProperties.QUANTITY]: {
      type: "number",
      label: "Quantity",
    },
    [LineItemProperties.AMOUNT]: {
      type: "number",
      label: "Amount",
    },
  };

export const TransactionInputs: Record<
  Exclude<
    TransactionProperties,
    TransactionProperties.LINE | TransactionProperties.AMOUNT
  >,
  TransactionInputType
> = {
  [TransactionProperties.DATE]: {
    type: "date",
    label: "Transaction Date",
  },
  [TransactionProperties.SUMMARY]: {
    type: "text",
    label: "Transaction Summary",
  },
  [TransactionProperties.PAYMENT_METHOD]: {
    type: "text",
    label: "Payment Method",
  },
  [TransactionProperties.DESCRIPTION]: {
    type: "text",
    label: "Transaction Description",
  },
  [TransactionProperties.PAYMENT_REFERENCE]: {
    type: "text",
    label: "Payment Reference",
  },
  [TransactionProperties.PAYMENT_REFERENCE]: {
    type: "text",
    label: "Payment Reference",
  },
};

export interface LineItemStateType {
  [LineItemProperties.CATEGORY]: string;
  [LineItemProperties.PRODUCT_AND_SERVICES]: string;
  [LineItemProperties.AMOUNT]: string;
  [LineItemProperties.RATE]: string;
  [LineItemProperties.QUANTITY]: string;
  [LineItemProperties.DESCRIPTION]: string;
}

export interface LineAmountCalculationFields {
  [LineItemProperties.AMOUNT]: string;
  [LineItemProperties.RATE]: string;
  [LineItemProperties.QUANTITY]: string;
}

export interface TransactionStateType {
  [TransactionProperties.DATE]: string;
  [TransactionProperties.SUMMARY]: string;
  [TransactionProperties.DESCRIPTION]: string;
  [TransactionProperties.AMOUNT]: string;
  [TransactionProperties.PAYMENT_METHOD]: string;
  [TransactionProperties.PAYMENT_REFERENCE]: string;
  [TransactionProperties.LINE]: [LineItemStateType];
  mode: TransactionMode | null;
}

export interface ValidationMsgType {
  [TransactionProperties.DATE]: string;
  [TransactionProperties.SUMMARY]: string;
  [TransactionProperties.DESCRIPTION]: string;
  [TransactionProperties.AMOUNT]: string;
  [TransactionProperties.PAYMENT_METHOD]: string;
  [TransactionProperties.PAYMENT_REFERENCE]: string;
  [TransactionProperties.LINE]: string;
}

export enum ValidationMessage {
  TXN_DATE = "Enter Transaction Date",
  TXN_SUMMARY = "Enter Transaction Summary",
  TXN_PAYMENT_METHOD = "Enter payment Method",
  TXN_LINE = "Enter minimum one Transaction Line",
}

export interface ValidationStateType {
  isValid: boolean;
  message: ValidationMsgType;
}

export interface TransactionListStateType {
  [TransactionProperties.DATE]: string;
  [TransactionProperties.SUMMARY]: string;
  [TransactionProperties.DESCRIPTION]: string;
  [TransactionProperties.AMOUNT]: string;
  [TransactionProperties.PAYMENT_METHOD]: string;
  [TransactionProperties.PAYMENT_REFERENCE]: string;
  id: number;
}

export interface TransactionListResponseType extends TransactionListStateType {
  id: number;
}

export interface StateType {
  transaction: TransactionStateType;
  validation: ValidationStateType;
  transactionList: [TransactionListStateType] | [];
}

export const UPDATE_TXN_INPUT = "UPDATE_TXN_INPUT";
export const UPDATE_TXN_LINE_INPUT = "UPDATE_TXN_LINE_INPUT";
export const ADD_TXN_LINES = "ADD_TXN_LINES";
export const UPDATE_LINE_RATE = "UPDATE_LINE_RATE";
export const UPDATE_LINE_QTY = "UPDATE_LINE_QTY";
export const UPDATE_LINE_AMOUNT = "UPDATE_LINE_AMOUNT";
export const SAVE_TXN = "SAVE_TXN";
export const VALIDATE_TXN = "VALIDATE_TXN";
export const UPDATE_LIST = "UPDATE_LIST";
export const FETCH_TXN_LIST = "FETCH_TXN_LIST";
export const UPDATE_TXN_MODE = "UPDATE_TXN_MODE";

export const updateTxnInput = (
  updatedState: Partial<TransactionStateType>
) => ({
  type: UPDATE_TXN_INPUT as typeof UPDATE_TXN_INPUT,
  updatedState,
});
export const updateTxnMode = (mode: TransactionMode) => ({
  type: UPDATE_TXN_MODE as typeof UPDATE_TXN_MODE,
  mode,
});
export const updateTxnLineInput = (
  newLineItem: Partial<LineItemStateType>,
  lineIndex: number
) => ({
  type: UPDATE_TXN_LINE_INPUT as typeof UPDATE_TXN_LINE_INPUT,
  newLineItem,
  lineIndex,
});
export const addTxnLines = (lines: number = 1) => ({
  type: ADD_TXN_LINES as typeof ADD_TXN_LINES,
  numberOfLines: lines,
});
export const updateLineRate = (lineIndex: number, data: string) => ({
  type: UPDATE_LINE_RATE as typeof UPDATE_LINE_RATE,
  lineIndex,
  data,
});
export const updateLineQty = (lineIndex: number, data: string) => ({
  type: UPDATE_LINE_QTY as typeof UPDATE_LINE_QTY,
  lineIndex,
  data,
});
export const updateLineAmount = (lineIndex: number, data: string) => ({
  type: UPDATE_LINE_AMOUNT as typeof UPDATE_LINE_AMOUNT,
  lineIndex,
  data,
});
export const saveTxn = () => ({
  type: SAVE_TXN as typeof SAVE_TXN,
});
export const validateTxn = (validationObj: ValidationStateType) => ({
  type: VALIDATE_TXN as typeof VALIDATE_TXN,
  validationObj,
});
export const updateList = (list: Array<TransactionListStateType>) => ({
  type: UPDATE_LIST as typeof UPDATE_LIST,
  list,
});
export const fetchTxnList = () => ({
  type: FETCH_TXN_LIST as typeof FETCH_TXN_LIST,
});

export type ActionType =
  | ReturnType<typeof addTxnLines>
  | ReturnType<typeof updateTxnInput>
  | ReturnType<typeof updateTxnLineInput>
  | ReturnType<typeof updateLineRate>
  | ReturnType<typeof updateLineQty>
  | ReturnType<typeof updateLineAmount>
  | ReturnType<typeof validateTxn>
  | ReturnType<typeof updateList>
  | ReturnType<typeof updateTxnMode>;

export enum TransactionMode {
  ESTIMATE = "ESTIMATE",
  ACTUAL = "ACTUAL",
}

export const incomeFields = {
  incomeDate: {
    label: "Date",
    type: "date",
  },
  incomeAmount: {
    label: "Amount",
    type: "number",
  },
  incomeType: {
    label: "Type",
    type: "number",
  },
  incomeNotes: {
    label: "Notes",
    type: "text",
  },
};
