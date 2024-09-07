/*
  useState is a React hook that allows you to add state to functional components.
  It returns two values:
  1. The current state (in this case, `count`).
  2. A function that can be used to update the state (in this case, `setCount`).
  
  This hook can be called as many times as needed in a component to manage different state variables.
  Each state is independent, and updating one state won't affect others.

Increment Function
    incrementByThree Function:
        Issue with Direct Updates:
            If you uncomment the lines that use setCountByThree(countByThree + 1); multiple times, it will only increment countByThree once.
            This happens because all three updates use the same stale value of countByThree (0), leading to each update setting countByThree to 1.
            
        Solution with Functional Form:
            Using setCountByThree((prev) => prev + 1); ensures that each update gets the most recent value of countByThree.
            This correctly increments countByThree by 3 because each call uses the updated value from the previous call.
*/

import { useState } from "react";
import TwoWayBindingExample from "./TwoWayDataBinding";
import MultipleState from "./MultipleState";

const UseStateHook = () => {
  // Declare a state variable 'count' initialized to 0.
  // 'setCount' is the function to update 'count'.
  const [count, setCount] = useState(0);

  // Declare a state variable 'countByThree' initialized to 0.
  // 'setCountByThree' is the function to update 'countByThree'.
  const [countByThree, setCountByThree] = useState(0);

  const incrementByThree = () => {
    // When using this approach, all three updates use the same stale value of 'countByThree',
    // so the state will only increment once and not as expected.
    // Uncommenting the following lines will show this behavior:
    // setCountByThree(countByThree + 1);
    // setCountByThree(countByThree + 1);
    // setCountByThree(countByThree + 1);

    // Using the functional form of `setCountByThree` ensures each update uses the latest state.
    // This correctly increments 'countByThree' three times.
    setCountByThree((prev) => prev + 1);
    setCountByThree((prev) => prev + 1);
    setCountByThree((prev) => prev + 1);
  };

  return (
    <>
      <h3>UseState</h3>
      {/* Display the current value of 'count' */}
      <p>Count : {count}</p>

      {/* When the button is clicked, update 'count' by increasing it by 1 */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      {/* Display the current value of 'countByThree' */}
      <p>Count By Three : {countByThree}</p>

      {/* When the button is clicked, update 'countByThree' by increasing it by 3 */}
      <button onClick={incrementByThree}>IncrementByThree</button>

      {/* Two way data binding */}
      <h3>Two way binding</h3>
      <TwoWayBindingExample />

      {/* MultiState */}
      <h3>Multiple state</h3>
      <MultipleState />
    </>
  );
};

export default UseStateHook;
