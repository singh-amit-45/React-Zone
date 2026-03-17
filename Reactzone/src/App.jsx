
import { useState } from "react";

function App() {
  const [val, setVal] = useState("Amit singh");

  return (
    <div>
      <h1>Get Input Field Value</h1>
      <input
        type="text"
        onChange={(event) => setVal(event.target.value)}
        placeholder="Enter User Name"
      />
      <h1>{val}</h1>
    </div>
  );
}

export default App;