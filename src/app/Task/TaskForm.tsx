import React from 'react'

export default function TaskForm({setItems}) {
    const [item, setItem] = React.useState({name: '', message: ''});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setItem(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
      e.preventDefault();
    //   onSubmit({ name: item.name, message: item.message });
    setItems( draft => {
        draft.push({ name: item.name, message: item.message });
    })
      setItem({ name: "", message: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Task</h1>
            <input
                type="text"
                placeholder="Task Name"
                name="name"
                value={item.name}
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                placeholder="Task Message"
                name="message"
                value={item.message}
                onChange={handleChange}
            />
            <br />
            <button type="submit">Add Task</button>
        </form>
    );
}