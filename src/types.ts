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
    [LineItemProperties.CATEGORY]: {
      type: "dropDown",
      label: "Category",
    },
    [LineItemProperties.PRODUCT_AND_SERVICES]: {
      type: "dropDown",
      label: "Product/Service",
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
  [TransactionProperties.DESCRIPTION]: {
    type: "text",
    label: "Transaction Description",
  },
  [TransactionProperties.PAYMENT_METHOD]: {
    type: "text",
    label: "Payment Method",
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

export interface TransactionStateType {
  [TransactionProperties.DATE]: string;
  [TransactionProperties.SUMMARY]: string;
  [TransactionProperties.DESCRIPTION]: string;
  [TransactionProperties.AMOUNT]: string;
  [TransactionProperties.PAYMENT_METHOD]: string;
  [TransactionProperties.PAYMENT_REFERENCE]: string;
  [TransactionProperties.LINE]: [LineItemStateType];
}

export interface StateType {
  transaction: TransactionStateType;
}

export const UPDATE_TXN_INPUT = "UPDATE_TXN_INPUT";
export const UPDATE_TXN_LINE_INPUT = "UPDATE_TXN_LINE_INPUT";

export const updateTxnInput = (
  updatedState: Partial<TransactionStateType>
) => ({
  type: UPDATE_TXN_INPUT as typeof UPDATE_TXN_INPUT,
  updatedState,
});
export const updateTxnLineInput = (
  newLineItem: Partial<LineItemStateType>
) => ({
  type: UPDATE_TXN_LINE_INPUT as typeof UPDATE_TXN_LINE_INPUT,
  newLineItem,
});

export type ActionType =
  | ReturnType<typeof updateTxnInput>
  | ReturnType<typeof updateTxnLineInput>;
