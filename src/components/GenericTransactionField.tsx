import { useDispatch, useSelector } from "react-redux";
import {
  getLineItemValue,
  getTransaction,
} from "../reducers/transactionReducer";
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
  const dispatch = useDispatch();

  let getTxnValue = getTxn(transactionProperty);
  if (typeof getTxnValue !== "string") {
    getTxnValue = "";
  }

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
