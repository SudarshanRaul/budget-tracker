import { useState } from "react";
import AddTransaction from "./components/AddTransaction";
import FooterAction from "./components/FooterAction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AddTransaction />
      <FooterAction />
    </div>
  );
}

export default App;
