import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { incomeFields, TransactionMode, updateTxnMode } from "../types";
import FooterAction from "./FooterAction";
import TransactionForm from "./TransactionForm";

function AddIncome() {
  return (
    <>
      <div>
        <h1>Add Income</h1>
      </div>
      <div>
        {Object.keys(incomeFields).map((key, index) => {
          return (
            <div key={index}>
              <label>
                {incomeFields[key].label}
                <input type={incomeFields[key].type} value={"8"} />
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AddIncome;
