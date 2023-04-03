import { useDispatch, useSelector } from "react-redux";
import { getLineItemValue, getTransaction } from "../reducer";
import {
  TransactionInputs,
  LineItemInputs,
  TransactionInputType,
  LineItemProperties,
  updateTxnInput,
  TransactionProperties,
  updateTxnLineInput,
} from "../types";
import "./GenericTransactionField.css";

interface GenericLineItemFieldProps {
  lineItemProperty: LineItemProperties;
  lineRef: number;
}

interface EventType {
  target: {
    value: string;
  };
}

function GenericLineItemField({
  lineItemProperty,
  lineRef,
}: GenericLineItemFieldProps) {
  const { label, type }: TransactionInputType =
    LineItemInputs[lineItemProperty];
  const getLineItem = useSelector(getLineItemValue);
  const dispatch = useDispatch();

  const getTxnValue = getLineItem(lineRef, lineItemProperty);

  function updateDate({ target: { value } }: EventType) {
    dispatch(updateTxnLineInput({ [lineItemProperty]: value }, lineRef));
  }
  return (
    <div className={`genericLineItemField ${lineItemProperty}`}>
      <label>
        <div className="genericLineItemInput">
          <input type={type} value={getTxnValue} onChange={updateDate} />
        </div>
      </label>
    </div>
  );
}

export default GenericLineItemField;
