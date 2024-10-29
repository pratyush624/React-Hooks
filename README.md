`Running the application`

- Root of the project -> npm install -> npm run dev

`UseEffect`

Execution Timing: useEffect runs after the render is committed to the screen. This means it does not block the browser’s painting process.

Use Case:

Use useEffect for tasks that do not need to block the rendering of the UI, such as:

- Data fetching
- Subscriptions
- Setting up event listeners
- Updating the DOM that doesn't affect the initial layout (e.g., adding/removing class names, etc.)
- Performance: Since useEffect runs after the paint, it can help improve perceived performance by allowing the UI to load quickly without being blocked by side effects.
