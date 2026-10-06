import { useState } from "react";


export default function Counter({name}: {name: string}) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="">
            <h1>Counter {name}:  {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}