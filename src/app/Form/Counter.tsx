import { useState } from "react";

export default function Counter() {
    // state data yang terisolasi dan private pada component
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={
                () => {
                    setCounter(counter => counter + 1);
                    setCounter(counter => counter + 1);
                    setCounter(counter => counter + 1);
                    console.log("counter", counter);
                }
            } >Add Counter</button>
        </div>
    )
}