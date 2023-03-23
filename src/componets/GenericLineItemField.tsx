import { useDispatch, useSelector } from "react-redux";
import { getLineItemValue, getTransaction } from "../reducer";
import {
  TransactionInputs,
  LineItemInputs,
  TransactionInputType,
  LineItemProperties,
  updateTxnInput,
  TransactionProperties,
} from "../types";
import "./GenericTransactionField.css";

interface GenericLineItemFieldProps {
  lineItemProperty: LineItemProperties;
}

interface EventType {
  target: {
    value: string;
  };
}

function GenericLineItemField({ lineItemProperty }: GenericLineItemFieldProps) {
  const { label, type }: TransactionInputType =
    LineItemInputs[lineItemProperty];
  const getTxn = useSelector(getTransaction);
  const getLineItem = useSelector(getLineItemValue);
  const dispatch = useDispatch();

  //   const getTxnValue = getTxn(transactionProperty);

  function updateDate({ target: { value } }: EventType) {
    dispatch(updateTxnInput({ [lineItemProperty]: value }));
  }
  return (
    <div className={`genericLineItemField ${lineItemProperty}`}>
      <label>
        <div className="genericLineItemInput">
          <input type={type} value={"getTxnValue"} onChange={updateDate} />
        </div>
      </label>
    </div>
  );
}

export default GenericLineItemField;
