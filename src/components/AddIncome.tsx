import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TransactionMode, updateTxnMode } from "../types";
import FooterAction from "./FooterAction";
import TransactionForm from "./TransactionForm";

function AddIncome() {
  return (
    <>
      <div>
        <h1>Add Income</h1>
      </div>
      <TransactionForm />
      <FooterAction />
    </>
  );
}

export default AddIncome;
