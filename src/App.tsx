import { useState } from "react";
import AddTransaction from "./components/AddTransaction";
import { Route, Routes } from "react-router-dom";
import ListTransaction from "./components/ListTransaction";
import { TransactionMode } from "./types";
import AddIncome from "./components/AddIncome";

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <a href="/expense/actual">Expense - Add Actual Transaction</a>
        </div>
        <div>
          <a href="/expense/estimate">Expense - Add Estimate Transaction</a>
        </div>
        <div>
          <a href="/income">Add Income</a>
        </div>
        <div>
          <a href="/">List</a>
        </div>
      </nav>
      <Routes>
        <Route
          element={<AddTransaction mode={TransactionMode.ESTIMATE} />}
          path="expense/estimate"
        />
        <Route
          element={<AddTransaction mode={TransactionMode.ACTUAL} />}
          path="expense/actual"
        />
        <Route element={<AddIncome />} path="income" />
        <Route element={<ListTransaction />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
