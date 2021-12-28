import { useState } from "react";
import PinInput from "./Pin/PinInput";
import "./styles.css";

export default function App() {
  const [state, setState] = useState("");
  return (
    <div className="App">
      <h1>Custom Component</h1>
      <PinInput onChange={(pin) => setState(pin)} />
      <hr />
      <div>
        {state.length === 5 ? (
          <span style={{ color: "green" }}>
            PIN: {state} <br />
            STATUS: SUCCESS
          </span>
        ) : (
          state
        )}
      </div>
    </div>
  );
}
