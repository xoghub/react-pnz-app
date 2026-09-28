import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      'inCompleted' : true,
      'isDeleted' : false,
      'text': 'This is text',
    },
    {
      'inCompleted' : false,
      'text': 'This is text 2',
    },
    {
      'inCompleted' : true,
      'text': 'This is text 3',
    },
    {
      'inCompleted' : true,
      'text': 'This is text 34',
    },
  ]
  // const todos  = data.map((todo) => {
  //   return <Todo {...todo}></Todo>
  // })
    return (
      <ul>
        {data.map((todo, index) => (
          <Todo key={index} {...todo}></Todo>
        ))}
      </ul>
    );
}