# ReactJS Dasar - Presentation Summary

**Presenter:** Eko Kurniawan Khannedy
**Role:** Technical Architect at a leading e-commerce company in Indonesia
**Links:** [Programmer Zaman Now](http://www.programmerzamannow.com) | [YouTube](http://youtube.com/c/ProgrammerZamanNow)

---

## 1. Introduction & History of ReactJS

- **Why a Framework?** Standardizes web frontend development, especially for teams, preventing inconsistent coding styles.
- **History:**
  - **2010:** Developed as FaxJS at Facebook to handle feed/timeline updates without refreshing.
  - **2011:** Integrated with XHP and renamed ReactJS.
  - **2013:** Released to the public as an OpenSource tool.
  - Currently one of the most popular frontend frameworks.

## 2. Core Concepts: Components & JSX

- **Components:** Independent, reusable pieces of UI containing HTML, JS, and CSS. Similar to functions, they can be nested like a DOM structure.
- **JSX (JavaScript XML):** A syntax extension allowing HTML/XML and JavaScript to be written together in a single file.
- **Rules of JSX:**
  - Must return a single root element.
  - All tags must be closed (e.g., `<img />`).
  - Attributes use `camelCase` (e.g., `className` instead of `class`).
  - JavaScript logic can be embedded using curly braces `{}`.

## 3. Creating a Project

- **Build Tool:** Vite is recommended for scaffolding React projects.
- **Commands:**
  - JavaScript: `npm create vite@latest app-name -- --template react`
  - TypeScript: `npm create vite@latest app-name -- --template react-ts`
- **Rendering:** Applications are rendered by linking a root component to the DOM via `createRoot()` and `render()`.

## 4. Props (Properties)

- Used for parent-to-child component communication.
- Similar to HTML attributes but can pass JavaScript values (objects, arrays, functions).
- **Destructuring:** Commonly used to easily extract specific attributes from the props object.
- **Spread Syntax:** Useful for forwarding all props easily (`{...props}`).
- **Children Prop:** Supports nested components.

## 5. Styling & Conditional Rendering

- **Styling:** Uses the `className` attribute to apply CSS classes, unlike standard HTML which uses `class`.
- **Conditional Rendering:**
  - Returning `null` to hide elements.
  - Ternary operators (`condition ? true : false`).
  - Logical AND (`condition && element`) for rendering if a condition is met.

## 6. Collection Components & Keys

- React doesn't have loop syntax, so JS array methods like `.map()` are used to render lists of components.
- **Component Key:** Every element in a list requires a unique `key` attribute. This allows React to identify items that have changed, been added, or removed efficiently.

## 7. Pure Components & Event Handling

- **Pure Functions:** Return the same output for the same input and have no side effects. React assumes all components are pure.
- **Event Handlers:** Added directly to elements (e.g., `onClick={handleClick}`).
- **Event Object:** React uses a synthetic event object compatible with standard DOM events.
- **Event Propagation:** Events bubble up. Use `e.stopPropagation()` to stop it and `e.preventDefault()` to stop default behaviors like form submission.

## 8. Hooks & State Management (`useState`)

- **Hooks:** Special React functions to manage component lifecycles and states.
- **State (`useState`):** Memory specific to a component. It triggers a re-render when its value changes.
- **State Updates as Snapshots:** Modifying state doesn't instantly change the variable; it triggers a re-render to create a new UI "snapshot".
- **Immutability:** State data (Objects, Arrays) should be treated as immutable. You must create new objects/arrays instead of modifying the existing ones.
- **Immer Library:** A popular library used (via `use-immer`) to simplify updating complex, nested, immutable states.

## 9. The Rendering Process

1. **Trigger:** Initiated by initial load or a state change.
2. **Render:** React calls the component to determine what the UI should look like.
3. **Commit:** React updates the DOM with minimal necessary changes.

## 10. Sharing & Preserving State

- **Sharing State:** Moving state up to a common Parent component and passing it down via Props.
- **Preserving State:** React ties state to a component's position in the UI tree. If a component stays in the same position, its state is preserved. If it is removed, the state is destroyed.
