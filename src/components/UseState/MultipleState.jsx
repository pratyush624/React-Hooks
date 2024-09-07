/*
  This React component demonstrates how to handle form input changes and update state accordingly using the `useState` hook.
  
  - **Initial State**: The `user` state is initialized with empty values for `firstName`, `lastName`, and `email`.
  - **Input Change Handling**: The `handleInputChange` function updates the state based on user input. It uses the `name` attribute of the input fields to determine which part of the state to update.
  - **State Update**: The `setUser` function updates the `user` state with the new values, preserving the other fields unchanged.
  
  **Key Concepts:**
  - **State Management**: `useState` manages the state in a functional component.
  - **Event Handling**: The `handleInputChange` function processes input changes and updates state.
  - **Spread Operator**: `{ ...user }` creates a shallow copy of the state to avoid mutating the original state directly.
*/

import React from "react";

function MultipleState() {
  // Declare a state variable 'user' initialized with empty strings.
  // 'setUser' is the function used to update 'user'.
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Handle input changes and update the 'user' state.
  // The event object provides information about the input field that triggered the change.
  const handleInputChange = (event) => {
    // Destructure the 'name' and 'value' from the event target (input field).
    const { name, value } = event.target;

    // Update the state using the spread operator to preserve other properties.
    // [name]: value dynamically updates the specific property in the state.
    setUser({ ...user, [name]: value });
  };

  // Log the current state of 'user' to the console (for debugging purposes).
  console.log(user);

  return (
    <div className="MultipleState">
      <form>
        {/* Input field for 'firstName' */}
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          onChange={handleInputChange}
        />

        {/* Input field for 'lastName' */}
        <input
          type="text"
          placeholder="last name"
          name="lastName"
          onChange={handleInputChange}
        />

        {/* Input field for 'email' */}
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleInputChange}
        />
      </form>
      <p>
        firstName: {user.firstName} lastName: {user.lastName} email:{" "}
        {user.email}
      </p>
    </div>
  );
}

export default MultipleState;
