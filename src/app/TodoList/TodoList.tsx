import Todo from "./Todo";

export default function TodoList() {
    return (
      <ul>
        <Todo inCompleted={true} text="Learn HTML"></Todo>
        <Todo inCompleted={true} text="Learn CSS"></Todo>
        <Todo inCompleted={false} isDeleted={true} text="Learn TypeScript"></Todo>
        <Todo inCompleted={false} text="Learn JavaScript"></Todo>
        <Todo inCompleted={false} text="Learn PHP"></Todo>
      </ul>
    );
}