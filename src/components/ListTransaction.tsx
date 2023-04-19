import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getTransactionList } from "../reducers/listReducer";
import { fetchTxnList, TransactionProperties } from "../types";

function ListTransaction() {
  const dispatch = useDispatch();
  const list = useSelector(getTransactionList);

  useEffect(() => {
    dispatch(fetchTxnList());
  }, []);
  return (
    <>
      <div>
        <h1>List Transaction</h1>
        <div className="transaction-list-grid">
          <div className="transaction-list-header">id</div>
          <div className="transaction-list-header">Date</div>
          <div className="transaction-list-header">Summary</div>
          <div className="transaction-list-header">Amount</div>
          {list.map((transaction, index) => {
            return (
              <>
                <div className="transaction-list-cell">{transaction.id}</div>
                <div className="transaction-list-cell">
                  {transaction[TransactionProperties.DATE]}
                </div>
                <div className="transaction-list-cell">
                  {transaction[TransactionProperties.SUMMARY]}
                </div>
                <div className="transaction-list-cell">
                  ${transaction[TransactionProperties.AMOUNT]}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ListTransaction;
