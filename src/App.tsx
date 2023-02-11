import { useState } from "react";
import AddTransaction from "./componets/AddTransaction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AddTransaction />
    </div>
  );
;
}

export default App;
