import { useState } from "react";
import { useImmer } from "use-immer";

export default function Task() {
    const [item, setItem] = useState({name: '', message: ''});
    const [items, setItems] = useImmer<{name: string, message: string}[]>([]);

    function handleChange(e) {
        console.log("handleChange", e.target.value);
        console.log("handleChange", e.target.name);
        setItem(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    function handleClick(e) {
        console.log("handleClick", e);
        e.preventDefault();
        setItems(draft => {
            draft.push(item);
        });
        setItem({name: '', message: ''});
    }
    return (
      <div className="task">
        <div className="container">
          <h1>Create Task</h1>
          <form>
            <input
              type="text"
              placeholder="Task Name"
              name="name"
              value={item.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Task Message"
              name="message"
              value={item.message}
              onChange={handleChange}
            />
            <button onClick={handleClick}>Add Task</button>
          </form>
        </div>
        <div className="List">
          {items.map((arr, index) => (
            <div key={index}>
              <h3>
                {arr.name}: <p>{arr.message}</p>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
}
