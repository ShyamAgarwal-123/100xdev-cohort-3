import { createContext, useContext, useState } from "react"

const CounterContext = createContext();
const CounterContextProvider = ({children})=>{
    const [counter, setCounter] = useState(0);

    return <CounterContext.Provider value={{counter,setCounter}}>
        {children}
    </CounterContext.Provider>
    
}

export default function MyApp2(){
    return <div>
        <Parent />
    </div>
}



const Parent = () =>{

    return <CounterContextProvider>
        <Value />
        <Increase />
        <Decrease />    
    </CounterContextProvider>
}

const Increase = ()=>{
    const {setCounter} = useContext(CounterContext)

    const add = ()=>{
        setCounter((c)=> c+1)
    }

    return <div>
        <button onClick={add}>Increase</button>
    </div>
}

const Decrease = () =>{
    const {setCounter} = useContext(CounterContext)

    const decrese = ()=>{
        setCounter((c)=> c-1)
    }

    return <div>
        <button onClick={decrese}>Decrease</button>
    </div>
}

const Value = () =>{
    const {counter} = useContext(CounterContext);

    return <div>
        {counter}
    </div>
}
