import { useSelector } from "react-redux";
import { getTransaction } from "../reducers/transactionReducer";
import { TransactionProperties } from "../types";
import "./Amount.css";

function Amount() {
  const getTxn = useSelector(getTransaction);
  let txnAmount = getTxn(TransactionProperties.AMOUNT);
  if (typeof txnAmount !== "string") {
    txnAmount = "0.0";
  }
  const rupee = new Intl.NumberFormat("en-IN").format(
    parseInt(txnAmount.split(".")[0])
  );
  const paise = parseFloat(txnAmount)
    .toFixed(2)
    .split(".")[1];
  return (
    <div className="AmountContainer">
      <span className="currency-symbol">$</span>
      <span className="rupee">{rupee}</span>
      <span className="paise">{paise}</span>
    </div>
  );
}

export default Amount;
