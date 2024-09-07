/*
  Two-way data binding is a synchronization technique where changes to the user interface (UI) 
  automatically update the underlying data model and vice versa. This means that any updates 
  in the data model reflect instantly in the UI, and any changes made by the user in the UI are 
  immediately reflected in the data model.

  Two-Way Data Binding in Practice:
  1. Concept:
     - Model-to-View Binding: When the data model changes, the view (UI) is updated automatically.
     - View-to-Model Binding: When the user interacts with the UI and makes changes, the data model is updated accordingly.

  2. How It Works:
     - In two-way data binding, a data binding mechanism watches the data model and the view. 
       When the model changes, it updates the view. When the view changes (such as user input), 
       it updates the model.
*/

import { useState } from "react";

const TwoWayBindingExample = () => {
  // Declare a state variable 'text' initialized to an empty string.
  const [text, setText] = useState("");

  // Handle input change to update the state
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      {/* Input field value is bound to 'text' state */}
      <input type="text" value={text} onChange={handleChange} />

      {/* Display the value of 'text' */}
      <p>Current Value: {text}</p>
    </div>
  );
};

export default TwoWayBindingExample;
