import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // State variable to hold count

  // useEffect to replicate componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log("Component mounted for the first time");

    // This function runs on cleanup, replicating componentWillUnmount
    return () => {
      console.log("Component will unmount");
    };
  }, []); // Empty dependency array means this runs only once on mount

  // This useEffect handles updates to count, replicating componentDidUpdate
  useEffect(() => {
    console.log(`Count updated to: ${count}`);
  }, [count]); // Runs every time `count` changes

  const increment = () => {
    setCount(count + 1); // Update count state
  };

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
