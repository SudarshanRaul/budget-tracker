import { useSelector } from "react-redux";
import { getTransaction } from "../reducers/transactionReducer";
import {
  LineItemInputs,
  LineItemProperties,
  TransactionProperties,
} from "../types";
import Amount from "./Amount";
import GenericLineItemField from "./GenericLineItemField";
import GenericTransactionField from "./GenericTransactionField";
import LineItemHeader from "./LineItemHeader";

function LineItems() {
  let lineItems = useSelector(getTransaction)(TransactionProperties.LINE) || [];
  if (typeof lineItems === "string") {
    lineItems = [];
  }

  return (
    <div className="LineItemsContainer">
      <>
        {Object.keys(LineItemInputs).map(
          (lineItemProperty: string, index: number) => (
            <LineItemHeader
              lineItemProperty={lineItemProperty as LineItemProperties}
              key={index}
            />
          )
        )}

        {lineItems.map((line, lineIndex) => {
          return Object.keys(LineItemInputs).map(
            (lineItemProperty: string, index: number) => (
              <GenericLineItemField
                lineItemProperty={lineItemProperty as LineItemProperties}
                lineRef={lineIndex}
                key={index}
              />
            )
          );
        })}
      </>
    </div>
  );
}

export default LineItems;
