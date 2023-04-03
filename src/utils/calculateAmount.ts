import {
  LineAmountCalculationFields,
  LineItemProperties,
  LineItemStateType,
} from "../types";

export function calculateLineAmount(
  lineItemState: Partial<LineItemStateType>,
  currentLineItemState: Partial<LineAmountCalculationFields>
): Partial<LineItemStateType> {
  const nextLineItemState = {
    ...currentLineItemState,
    ...lineItemState,
  };
  const rate = nextLineItemState[LineItemProperties.RATE] || "1";
  const quantity = nextLineItemState[LineItemProperties.QUANTITY] || "1";
  const amount = parseFloat(rate) * parseFloat(quantity);
  return {
    ...lineItemState,
    [LineItemProperties.RATE]: `${rate}`,
    [LineItemProperties.QUANTITY]: `${quantity}`,
    [LineItemProperties.AMOUNT]: `${amount}`,
  };
}

export function calculateRate(
  lineItemState: Partial<LineItemStateType>,
  currentLineItemState: Partial<LineAmountCalculationFields>
): Partial<LineItemStateType> {
  const nextLineItemState = {
    ...currentLineItemState,
    ...lineItemState,
  };
  const quantity = nextLineItemState[LineItemProperties.QUANTITY] || "1";
  const amount = nextLineItemState[LineItemProperties.AMOUNT] || "1";
  const rate = parseFloat(amount) / parseFloat(quantity);
  return {
    ...lineItemState,
    [LineItemProperties.RATE]: `${rate}`,
    [LineItemProperties.QUANTITY]: `${quantity}`,
    [LineItemProperties.AMOUNT]: `${amount}`,
  };
}

export function calculatorUtil(
  lineItemState: Partial<LineAmountCalculationFields>,
  currentLineItemState: Partial<LineAmountCalculationFields>
): Partial<LineItemStateType> {
  const amount = lineItemState[LineItemProperties.AMOUNT];
  const rate = lineItemState[LineItemProperties.RATE];
  const quantity = lineItemState[LineItemProperties.QUANTITY];
  let calculatedValues: Partial<LineItemStateType> = lineItemState;
  if (rate) {
    calculatedValues = calculateLineAmount({ rate }, currentLineItemState);
  } else if (amount) {
    calculatedValues = calculateRate({ amount }, currentLineItemState);
  } else if (quantity) {
    calculatedValues = calculateLineAmount({ quantity }, currentLineItemState);
  }
  return calculatedValues;
}
