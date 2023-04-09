import { TransactionInputs, TransactionProperties } from "../types";
import Amount from "./Amount";
import GenericTransactionField from "./GenericTransactionField";
import LineItems from "./LineItems";

function TransactionForm() {
  return (
    <div className="TransactionForm">
      <Amount />
      {Object.keys(TransactionInputs).map(
        (transactionProperty: string, index: number) => (
          <GenericTransactionField
            transactionProperty={
              transactionProperty as Exclude<
                TransactionProperties,
                TransactionProperties.LINE | TransactionProperties.AMOUNT
              >
            }
            key={index}
          />
        )
      )}
      <LineItems />
    </div>
  );
}

export default TransactionForm;
