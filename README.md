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

`useLayoutEffect`

Execution Timing: useLayoutEffect runs synchronously after all DOM mutations but before the browser has painted. This means it runs immediately after the render phase and before the screen is updated.

Use Case:

Use useLayoutEffect for tasks that require reading layout information from the DOM and synchronously re-rendering. For example:

- Measuring the size or position of an element (e.g., getting the width of a div to adjust styles)
- Making DOM changes that need to occur before the browser paints to avoid flickering or jankiness
- Performance: Because it runs synchronously and can block the paint, it can potentially lead to performance issues if used excessively or inappropriately.
