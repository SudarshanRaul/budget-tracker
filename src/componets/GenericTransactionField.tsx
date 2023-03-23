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

interface GenericTransactionFieldProps {
  transactionProperty: Exclude<
    TransactionProperties,
    TransactionProperties.LINE | TransactionProperties.AMOUNT
  >;
}

interface EventType {
  target: {
    value: string;
  };
}

function GenericTransactionField({
  transactionProperty,
}: GenericTransactionFieldProps) {
  const { label, type }: TransactionInputType =
    TransactionInputs[transactionProperty];
  const getTxn = useSelector(getTransaction);
  const getLineItem = useSelector(getLineItemValue);
  const dispatch = useDispatch();

  const getTxnValue = getTxn(transactionProperty);

  function updateDate({ target: { value } }: EventType) {
    dispatch(updateTxnInput({ [transactionProperty]: value }));
  }
  return (
    <div className={`genericTransactionField ${transactionProperty}`}>
      <label>
        <div className="genericTransactionLabel">{`${label} `}</div>
        <div className="genericTransactionInput">
          <input type={type} value={getTxnValue} onChange={updateDate} />
        </div>
      </label>
    </div>
  );
}

export default GenericTransactionField;
