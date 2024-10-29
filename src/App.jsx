import React, { useState } from "react";
import Counter from "./components/UseEffect/Counter";
import UseStateHook from "./components/UseState/UseStateHook";
import FunctionalCounter from "./components/UseEffect/FunctionalCounter";

function App() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <>
      {/* ======== UseState Hook ==============*/}
      {/* <UseStateHook/> */}
      {/* ======= Lifecycle method ========== */}
      {/* <div style={{ textAlign: "center" }}>
        <button onClick={() => setShowCounter(!showCounter)}>
          Toggle Component
        </button>
        {showCounter && <Counter />}
      </div> */}
      {/* ======= Lifecycle hook ========== */}
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setShowCounter(!showCounter)}>
          Toggle Component
        </button>
        {showCounter && <FunctionalCounter />}
      </div>
    </>
  );
}

export default App;
