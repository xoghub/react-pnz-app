import { useState } from "react";
import Counter from "./Counter";


export default function CounterApps() {
    const [show2, setShow2] = useState(true);

    function handleChange(e) {
        setShow2(e.target.checked);
    }

    return (
        <div className="">
            <h1>Counter Apps</h1>
            <label>
                <input type="checkbox" checked={show2} onChange={handleChange} />
                Show Counter 2
            </label>
            {show2 ? <Counter name="2"/> : <Counter name="1"/>}
        </div>
    )
}