import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TransactionMode, updateTxnMode } from "../types";
import FooterAction from "./FooterAction";
import TransactionForm from "./TransactionForm";

export interface AddTransactionPropsTypes {
  mode: TransactionMode;
}

function AddTransaction({ mode }: AddTransactionPropsTypes) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTxnMode(mode));
  });
  return (
    <>
      <div>
        <h1>Add Transaction - {mode}</h1>
      </div>
      <TransactionForm />
      <FooterAction />
    </>
  );
}

export default AddTransaction;
