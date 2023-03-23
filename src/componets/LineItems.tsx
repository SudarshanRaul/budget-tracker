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
  return (
    <div className="LineItemsContainer">
      {Object.keys(LineItemInputs).map(
        (lineItemProperty: string, index: number) => (
          <LineItemHeader
            lineItemProperty={lineItemProperty as LineItemProperties}
          />
        )
      )}

      {Object.keys(LineItemInputs).map(
        (lineItemProperty: string, index: number) => (
          <>
            <GenericLineItemField
              lineItemProperty={lineItemProperty as LineItemProperties}
              key={index}
            />
          </>
        )
      )}
    </div>
  );
}

export default LineItems;
