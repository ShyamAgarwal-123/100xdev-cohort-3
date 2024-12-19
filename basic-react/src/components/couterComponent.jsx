import { useState } from "react";

const CounterComponent = ()=>{
    const [counter, setCounter] = useState(0)

    const addValue = ()=>{
        setCounter(counter+1)
        console.log(counter);
    }

    return <div>
        <div>{counter}</div>
        <button onClick={addValue}>Increase</button>
    </div>
}

export default CounterComponent